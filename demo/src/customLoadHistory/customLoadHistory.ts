/*
 *  Copyright IBM Corp. 2025
 *
 *  This source code is licensed under the Apache-2.0 license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 *  @license
 */

import { ChatInstance, MessageResponseTypes } from "@carbon/ai-chat";

/**
 * Loads sample messages into the chat to test scroll behavior
 * 
 * @param instance The chat instance to load history into
 * @returns A promise that resolves when messages are loaded
 */
export const customLoadHistory = async (instance: ChatInstance): Promise<void> => {
  if (!instance) {
    console.error("Chat instance is not available");
    return;
  }

  try {
    // Add 5 pairs of request/response messages
    for (let i = 1; i <= 5; i++) {
      // Add response message with long text to test scrolling
      await instance.messaging.addMessage({
        id: `response-${i}`,
        output: {
          generic: [
            {
              response_type: MessageResponseTypes.TEXT,
              text: `This is sample response ${i} with enough text to test scrolling behavior. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.`,
            },
          ],
        },
      });
    }
    
    console.log("Messages loaded successfully");
  } catch (error) {
    console.error("Error loading messages:", error);
  }
};

// Made with Bob
