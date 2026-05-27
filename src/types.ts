import React from 'react';

export interface Dress {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  modelUrl: string;
  thumbnailUrl: string;
}

export interface EventInfo {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}
