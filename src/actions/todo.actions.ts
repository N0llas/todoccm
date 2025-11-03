'use server';

import { TodoCacheType } from "@/Types";
import storage from "node-persist";

await storage.init({
  dir: "./cache",
  ttl: false
});

const TODO_CACHE_KEY = 'todoCache';

/**
 * Retrieve the current todo cache from storage.
 */
async function getCache(): Promise<TodoCacheType[]> {
  return (await storage.getItem(TODO_CACHE_KEY)) || [];
}

/**
 * Create a new todo item and save it to cache.
 * @param text - The text of the new todo item.
 */
export async function create(text: string): Promise<void> {
  const cached: TodoCacheType[] = await getCache();

  const id = cached.length + 1;
  cached.push({ id, text });

  await storage.setItem(TODO_CACHE_KEY, cached);
}

/**
 * Update an existing todo item's text in cache.
 * @param id - The unique id of the todo.
 * @param text - The new text to update.
 * @returns The updated todo object, or null if not found.
 */
export async function update(id: number, text: string): Promise<TodoCacheType | null> {
  const cached: TodoCacheType[] = await getCache();

  const index = cached.findIndex(todo => todo.id === id);
  if (index === -1) return null;

  cached[index].text = text;

  await storage.setItem(TODO_CACHE_KEY, cached);
  return cached[index];
}

/**
 * Remove a todo item from cache by its id.
 * @param id - The unique id of the todo to remove.
 * @returns true if deleted, false if the todo was not found.
 */
export async function remove(id: number): Promise<boolean> {
  const cached: TodoCacheType[] = await getCache();

  const index = cached.findIndex(todo => todo.id === id);
  if (index === -1) return false;

  cached.splice(index, 1);
  await storage.setItem(TODO_CACHE_KEY, cached);
  return true;
}

/**
 * Retrieve all todos from cache.
 * @returns An array of TodoCacheType objects.
 * 
 * Specific: Simply wraps getCache to provide all items.
 */
export async function getAll(): Promise<TodoCacheType[]> {
  const cached: TodoCacheType[] = await getCache();
  return cached;
}

/**
 * Retrieve a single todo from cache by its id.
 * @param id - The unique id of the todo to retrieve.
 * @returns The todo object if found, otherwise null.
 */
export async function getById(id: number): Promise<TodoCacheType | null> {
  const cached: TodoCacheType[] = await getCache();
  return cached.find(todo => todo.id == id) || null;
}
