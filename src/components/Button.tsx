'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { create, remove, update } from '@/actions/todo.actions';
import { ButtonProps, buttonTitles, ButtonType } from '@/Types';

/**
 * Reusable Button component for Todo actions.
 * 
 * The button label is determined by buttonTitles based 
 * on the type. 
 * 
 * Clicking the button triggers the appropriate action 
 * (Insert, Update, Remove) and refreshes the page.
 */
export default function Button({ type, text, id }: ButtonProps) {
  const router = useRouter();

  const handleClick = async () => {
    switch (type) {
      case ButtonType.Insert:
        if (text) await create(text);
        break;

      case ButtonType.Update:
        if (id && text) await update(id, text);
        break;

      case ButtonType.Remove:
        if (id) await remove(id);
        break;
    }
    router.refresh();
  };

  return (
    <button onClick={handleClick}>
      {buttonTitles[type]}
    </button>
  );
}
