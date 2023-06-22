import React from 'react';
import { Stack, usePathname } from 'expo-router';

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const path = usePathname();
  console.log(path);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
