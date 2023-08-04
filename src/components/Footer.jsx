import { Box, Image, Text, Flex } from '@chakra-ui/react';
import AiLogo from '../assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={AiLogo} alt='logo' marginLeft={1} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
