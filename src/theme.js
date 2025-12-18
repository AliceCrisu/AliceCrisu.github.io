// Design System Tokens

// Spacing
export const spacing = {
  // Main layout padding
  mainPadding: '1.625rem',
  navbarWidth: '68px',

  // Section spacing
  sectionVertical: '2rem', // py-8
  sectionBottom: '2rem', // pb-8

  // Content padding (black frames)
  contentPadding: '2rem', // p-8

  // Internal spacing
  contentGap: '4rem', // gap-4
  largeGap: '2rem', // gap-8
  titleGap: '8rem', // gap-4
};

// Typography
export const fonts = {
  families: {
    inter: 'Inter',
    anton: 'Anton',
    montserrat: 'Montserrat',
  },

  sizes: {
    // Subtitles (e.g., "highlights", "introduction")
    subtitle: {
      fontSize: 'clamp(12px, 1.5vw, 20px)',
      letterSpacing: 'clamp(15px, 3.5vw, 46.6px)',
      marginRight: 'clamp(-15px, -3.5vw, -46.6px)', // Fix centering
    },

    // Hero subtitle (e.g., "alice")
    heroSubtitle: {
      fontSize: 'clamp(12px, 1.5vw, 20px)',
      letterSpacing: 'clamp(20px, 7vw, 93.3px)',
      marginRight: 'clamp(-20px, -7vw, -93.3px)',
    },

    // Main titles (e.g., "Projects", "About Me")
    title: {
      fontSize: 'clamp(32px, 5vw, 64px)',
      letterSpacing: 'clamp(2px, 0.35vw, 4.48px)',
      marginRight: 'clamp(-2px, -0.35vw, -4.48px)',
    },

    // Section headings
    heading: {
      fontSize: 'clamp(24px, 2.5vw, 32px)',
      letterSpacing: 'clamp(0.8px, 0.1vw, 1.28px)',
    },

    // Subheadings
    subheading: {
      fontSize: 'clamp(18px, 1.8vw, 24px)',
      letterSpacing: 'clamp(0.6px, 0.08vw, 0.96px)',
    },

    // Project card titles
    cardTitle: {
      fontSize: 'clamp(16px, 1.5vw, 20px)',
      letterSpacing: 'clamp(0.4px, 0.05vw, 0.64px)',
    },

    // Body text
    body: {
      fontSize: 'clamp(16px, 1.3vw, 19px)',
      letterSpacing: 'clamp(0.5px, 0.08vw, 0.98px)',
    },

    // Small text
    small: {
      fontSize: 'clamp(12px, 1.1vw, 14px)',
      letterSpacing: 'clamp(0.5px, 0.08vw, 0.98px)',
    },

    // Tiny text
    tiny: {
      fontSize: 'clamp(12px, 1.1vw, 14px)',
      letterSpacing: 'clamp(0.4px, 0.06vw, 0.7px)',
    },

    // Navbar
    nav: {
      fontSize: '20px',
      letterSpacing: '0.8px',
    },

    // Button
    button: {
      fontSize: 'clamp(14px, 1.2vw, 16px)',
      letterSpacing: 'clamp(0.6px, 0.08vw, 0.8px)',
    },

    // Link
    link: {
      fontSize: 'clamp(16px, 1.5vw, 20px)',
      letterSpacing: 'clamp(0.6px, 0.08vw, 0.8px)',
    },

    // Lightbulb click text
    clickText: {
      fontSize: 'clamp(16px, 1.5vw, 20px)',
    },
  },

  weights: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    extrabold: 'font-extrabold',
  },
};

// Colors
export const colors = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
};

// Border widths
export const borders = {
  thick: '8px',
  medium: '2px',
};

// Line height
export const lineHeights = {
  tight: '1.095',
  normal: '1.4',
  relaxed: '1.6',
  navbar: '1.2',
};

// Z-index layers
export const zIndex = {
  navbar: 50,
  projectOverlay: 100,
};
