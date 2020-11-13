import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Box,
} from "@chakra-ui/core";
import React from "react";

interface InfoPopoverProps {}

export const InfoPopover: React.FC<InfoPopoverProps> = () => {
  return (
    <Box m="48px 0px" fontFamily="body" color="#dddddd">
      <Popover placement="right" closeOnBlur={false}>
        <PopoverTrigger>
          <Button cursor="pointer" border="none" bg="buttonGreen" color="white">
            Info
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="blue.800"
          borderColor="blue.800"
          p="10px 20px 20px 20px"
        >
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            Timer whiteboard
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton cursor="pointer" bg="blue.600" border="none" />
          <PopoverBody>
            If you leave a day blank, the crossfit.com main site workout will
            show up on the whiteboard instead.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
