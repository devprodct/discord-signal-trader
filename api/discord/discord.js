import { axiosInstance } from '../instance.js';
import { urlScheme } from '../scheme.js';

export const getMessagesFromDiscord = () => axiosInstance.get(urlScheme.channel);