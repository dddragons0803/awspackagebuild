// filepath: src/react-importer.d.ts
declare module 'react-importer' {
  // Add specific type declarations if available, or use 'any' as a fallback
  export const THEME_SIGNAL: any;
  export const THEME_FRESCA: any;
  export const THEME_DEFAULT: any;
  export interface ImporterOutputField {
    // Define the structure of ImporterOutputField if known
  }
  export interface ImporterTheme {
    // Define the structure of ImporterTheme if known
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      info: string;
      warning: string;
      light: string;
      dark: string;
    };
  }
  const Importer: any;
  export default Importer;
}