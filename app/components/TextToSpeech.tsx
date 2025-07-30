'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TextToSpeechProps {
  className?: string;
}

export default function TextToSpeech({ className = '' }: TextToSpeechProps) {
  const { currentLanguage } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Function to detect if text contains Hindi characters
  const containsHindi = (text: string): boolean => {
    const hindiPattern = /[\u0900-\u097F]/; // Unicode range for Devanagari script
    return hindiPattern.test(text);
  };

  // Function to select appropriate voice based on text content
  const selectVoiceForText = (text: string): SpeechSynthesisVoice | null => {
    if (!voices.length) return null;
    
    const hasHindi = containsHindi(text);
    
    if (hasHindi) {
      // Find Hindi voice
      const hindiVoice = voices.find(voice => 
        voice.lang === 'hi-IN' || voice.lang === 'hi'
      );
      return hindiVoice || voices[0];
    } else {
      // Find English Indian male voice
      const englishVoice = voices.find(voice => 
        voice.lang === 'en-IN' && voice.name.toLowerCase().includes('male')
      );
      return englishVoice || voices[0];
    }
  };

  useEffect(() => {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      // Load available voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        
        // Get both English Indian male and Hindi voices
        const enINVoices = availableVoices.filter(voice => 
          voice.lang === 'en-IN' && voice.name.toLowerCase().includes('male')
        );
        
        const hiINVoices = availableVoices.filter(voice => 
          voice.lang === 'hi-IN' || voice.lang === 'hi'
        );
        
        setVoices([...enINVoices, ...hiINVoices]);
        
        // Select the first English Indian male voice as default
        const preferredVoice = enINVoices[0] || availableVoices.find(voice => 
          voice.lang === 'en-IN'
        ) || availableVoices[0];
        
        setSelectedVoice(preferredVoice);
      };

      // Load voices immediately if available
      if (window.speechSynthesis.getVoices().length > 0) {
        loadVoices();
      } else {
        // Wait for voices to load
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, [currentLanguage]);

  const speak = (text: string) => {
    if (!isSupported) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    // Select appropriate voice based on text content
    const voiceForText = selectVoiceForText(text);
    if (!voiceForText) return;

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voiceForText;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.lang = voiceForText.lang;

    // Event handlers
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    // Store reference and speak
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setIsPlaying(false);
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setIsPlaying(true);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const toggleSpeech = () => {
    if (isPlaying) {
      stop();
    } else {
      // Get the main content text to speak, excluding header
      const sections = document.querySelectorAll('section');
      let textToSpeak = '';
      
      // Collect text from all sections (excluding nav)
      sections.forEach(section => {
        const sectionText = section.textContent || '';
        textToSpeak += sectionText + ' ';
      });
      
      if (textToSpeak.trim()) {
        speak(textToSpeak.trim());
      } else {
        // Fallback: get body content but exclude navigation
        const body = document.querySelector('body');
        if (body) {
          const nav = body.querySelector('nav');
          if (nav) {
            const bodyText = body.textContent || '';
            const navText = nav.textContent || '';
            const cleanText = bodyText.replace(navText, '').trim();
            speak(cleanText || 'Welcome to Kisaan Direct');
          } else {
            speak(body.textContent || 'Welcome to Kisaan Direct');
          }
        }
      }
    }
  };

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Main TTS Button */}
      <button
        onClick={toggleSpeech}
        className="p-2 rounded-lg bg-gradient-to-r from-[#2a9d8f] to-[#f4a261] text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
        title={currentLanguage === 'hi' ? 'टेक्स्ट को बोलें' : 'Text to Speech'}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-2.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Voice Display */}
      {voices.length > 0 && (
        <div className="text-xs text-gray-600 px-2 py-1 border border-gray-300 rounded bg-gray-50">
          {currentLanguage === 'hi' ? 'हिंदी/English' : 'Hindi/English'}
        </div>
      )}
    </div>
  );
} 