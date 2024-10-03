// APIClient.ts

import axios from "axios";
import { BACKEND_CONFIG } from "@src/config";
import type { Review } from "@src/models/ReviewClass";

//TODO: Add JWT auth system to get the token
//TODO: Add JWT auth system to send the token with every request
//TODO: Add needed functions for comment class

const BASE_URL = `http://${BACKEND_CONFIG.IP}:${BACKEND_CONFIG.PORT}/api`;

export async function fetchAllArtists(): Promise<any[]> {
  try {
    const response = await axios.get(`${BASE_URL}/artists`);
    return response.data;
  } catch (error) {
    console.error("Error fetching artists", error);
    throw error;
  }
}

export async function fetchAllAlbums(): Promise<any[]> {
  try {
    const response = await axios.get(`${BASE_URL}/albums`);
    return response.data;
  } catch (error) {
    console.error("Error fetching albums", error);
    throw error;
  }
}

export async function fetchAllReviews(): Promise<any[]> {
    try {
      const response = await axios.get(`${BASE_URL}/reviews`);
      return response.data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
}

export async function fetchAllUsers(): Promise<any[]> {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
}

export async function fetchArtistById(artistId: string): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/artists/${artistId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching artist with ID: ${artistId}`, error);
    throw error;
  }
}

export async function fetchAlbumById(albumId: string): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/albums/${albumId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching album with ID: ${albumId}`, error);
    throw error;
  }
}

export async function fetchReviewById(id: string): Promise<any> {
    try {
      const response = await axios.get(`${BASE_URL}/reviews/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching review:', error);
      throw error;
    }
}

export async function fetchUserById(id: string): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function fetchAlbumAvgRating(id: string): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/albums/avgRating/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching average rating:', error);
    throw error;
  }
}

export async function fetchArtistaAvgRating(id: string): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/artists/avgRating/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching average rating:', error);
    throw error;
  }
}

export async function addReview(review: object): Promise<boolean | null> {
  try {
    const response = await axios.post(`${BASE_URL}/reviews`, review);
    return response.status === 201;
  } catch (error) {
    console.error('Error adding review:', error);
    return null;
  }
}

export async function updateReview(reviewId: string, review: object): Promise<boolean | null> {
  try {
    const response = await axios.put(`${BASE_URL}/reviews/${reviewId}`, review);
    return response.status === 200;
  } catch (error) {
    console.error('Error updating review:', error);
    return null;
  }
}

//TODO: Pedirle esta funcion a bul
export async function updateReviewLike(reviewId: string, likeChange: number): Promise<boolean> {
  try {
    const response = await axios.put(`${BASE_URL}/reviews/${reviewId}/like`, {
      likeChange,
    });

    return response.status === 200; // Return true if the request was successful
  } catch (error) {
    console.error(`Failed to update likes for review ${reviewId}:`, error);
    return false;
  }
}