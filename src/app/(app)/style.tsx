import * as React from 'react';
import { Text } from 'react-native';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import Example from '@/components/exampleToaster';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';
import { Box } from '@/components/ui/box';
import { FocusAwareStatusBar, SafeAreaView, ScrollView } from '@/ui';

export default function Style() {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Typography />
          <Box className="bg-primary-500 p-5">
            <Text className="text-typography-0">This is the Box</Text>
          </Box>
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
        <Example />
      </ScrollView>
    </>
  );
}
