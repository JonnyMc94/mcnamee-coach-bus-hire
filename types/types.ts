export interface ImageData {
    url: string;
    metadata: {
      Metadata: {
        'aria-label': string;
        alt: string;
        // Include other metadata properties as needed
      };
    };
  }