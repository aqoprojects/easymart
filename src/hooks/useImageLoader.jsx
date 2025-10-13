import { useState } from "react";


export function useImageLoader(){
  const [isLoading, setIsLoading] = useState(true)
  return {isLoading, setIsLoading};

}