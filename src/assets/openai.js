import OpenAI from 'openai';
import { OPENAiKEY } from './constans';

const openai = new OpenAI({
  apiKey:OPENAiKEY, 
  dangerouslyAllowBrowser: true
});

export default openai;