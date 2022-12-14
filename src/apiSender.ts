/* export async function sendDataToApi(data: any, url: string) {
    console.log('url ...', url)
    console.log('data ...', data)
    // console.log('succeed !!!')
    return 'succeed !!!' 
 } */

import axios from 'axios';
import type { Data } from './models/types'

class ApiSender {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public async sendData(data: Data | any) {
    try {
      console.log('url ...', this.url)
      console.log('data ...', data)
      const response = await axios.post(this.url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiSender