import { createContext, Dispatch, SetStateAction } from 'react';

const searchingImageURLContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(['', () => {}]);

export default searchingImageURLContext;
