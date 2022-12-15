import axios from 'axios';
import type { Data } from './models/types'

class ApiSender {
  private url: string;
  private token: string;

  constructor(url: string, token: string) {
    this.url = url;
    this.token = token;
  }

  public async sendData(data: Data | any) {
    try {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` }
      };
      console.log('url ...', this.url)
      console.log('data ...', data)
      const response = await axios.post(this.url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiSender;