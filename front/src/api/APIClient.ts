// APIClient.ts

import axios from "axios";
import { BACKEND_CONFIG } from "@src/config";
import type { Review } from "@src/models/ReviewClass";

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

export async function addReview(review: object, token: string): Promise<boolean | null> {
  try {
    const response = await axios.post(`${BASE_URL}/reviews`, review, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.status === 201;
  } catch (error) {
    console.error('Error adding review:', error);
    return null;
  }
}

export async function updateReview(reviewId: string, review: object, token: string): Promise<boolean | null> {
  try {
    const response = await axios.put(`${BASE_URL}/reviews/${reviewId}`, review, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.status === 200;
  } catch (error) {
    console.error('Error updating review:', error);
    return null;
  }
}

export async function updateReviewLike(reviewId: string, likeChange: number): Promise<boolean> {
  try {
    const response = await axios.put(`${BASE_URL}/reviews/like/${reviewId}`, null, {
      params: {
        likes: likeChange
      }
    });

    return response.status === 200; 
  } catch (error) {
    console.error(`Failed to update likes for review ${reviewId}:`, error);
    return false;
  }
}

export async function fetchAllComentarios(): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/comments/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments`, error);
    throw error;
  }
}

export async function fetchComentarioById(commentId: string): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comment with ID: ${commentId}`, error);
    throw error;
  }
}

export async function addComentario(comment: object): Promise<boolean | null> {
  try {
    const response = await axios.post(`${BASE_URL}/comments`, comment);
    return response.status === 201;
  } catch (error) {
    console.error('Error adding comment:', error);
    return null;
  }
}

export async function addUser(user: object): Promise<boolean | null> {
  try {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.status === 201;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
}

export async function authUser(user: object): Promise<string | null> {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, user);
    return response.data.token;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
}