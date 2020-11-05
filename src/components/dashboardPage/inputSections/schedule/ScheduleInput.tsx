import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Flex, Radio, RadioGroup, Text } from "@chakra-ui/core";

interface ScheduleInputProps {}

interface ClassInterface {
  startTime: string;
  endTime: string;
  category: string;
}

export const ScheduleInput: React.FC<any> = ({ text }) => {
  const [isClass, setIsClass] = useState<ClassInterface | null>({
    startTime: "",
    endTime: "",
    category: "1",
  });

  useEffect(() => {}, [isClass]);

  const [isDay, setIsDay] = useState(false);

  return (
    <Box>
      <Flex flexDirection="column" w="30%" ml="50px">
        <Text onClick={() => setIsDay(!isDay)} cursor={"pointer"}>
          {`${text} >`}
        </Text>
        {isDay && (
          <>
            <TextField
              id="start"
              label="Start time"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 600, // 5 min
              }}
            />

            <TextField
              id="end"
              label="End time"
              type="time"
              defaultValue="08:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 600, // 5 min
              }}
            />

            <RadioGroup
              onChange={(e) =>
                setIsClass({
                  startTime: "16:00",
                  endTime: "17:00",
                  category: e.target.value,
                })
              }
            >
              <Radio mt="5px" value="1">
                Crossfit
              </Radio>
              <Radio value="2">Gymnastics</Radio>
            </RadioGroup>
          </>
        )}
      </Flex>
    </Box>
  );
};
