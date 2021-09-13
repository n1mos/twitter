import { useEffect, useState } from "react";

function useDraft(value) {
  const [text, setText] = useState(null)

  useEffect(() => {
    window.localStorage.setItem('pendingTweet', value);
  }, [text])
}