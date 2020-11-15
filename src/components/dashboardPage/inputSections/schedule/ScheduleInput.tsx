import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Radio, RadioGroup } from "@chakra-ui/core";

interface ScheduleInputProps {
  classes: [];
  setClasses: Dispatch<SetStateAction<[]>>;
  id: number;
}

export const ScheduleInput: React.FC<any> = ({
  classes,
  setClasses,
  id,
  day,
  startVal,
  setStartVal,
  initialValues,
}) => {
  const [classValues, setClassValues] = useState({ ...initialValues });

  useEffect(() => {
    const addNewClass = { ...classes, [id]: classValues };
    setClasses(addNewClass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classValues]);

  const handleRemove = () => {
    const spread = { ...classes };
    delete spread[id];
    setClasses({ ...spread });

    const index = startVal.indexOf(id);
    if (index > -1) {
      startVal.splice(index, 1);
      setStartVal(startVal);
    }
  };

  return (
    <Box>
      <Flex flexDirection="column" w="40%" m="50px 0">
        <TextField
          id="start"
          label="Start time"
          type="time"
          defaultValue={classValues.start_time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 600, // 5 min
          }}
          onChange={(e) => {
            const spread = { ...classValues };
            spread.start_time = e.target.value;
            setClassValues(spread);
          }}
        />

        <TextField
          id="end"
          label="End time"
          type="time"
          defaultValue={classValues.end_time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 600, // 5 min
          }}
          onChange={(e) => {
            const spread = { ...classValues };
            spread.end_time = e.target.value;
            setClassValues(spread);
          }}
        />

        <RadioGroup
          defaultValue={classValues.category}
          onChange={(e) => {
            const spread = { ...classValues };
            spread.category = parseInt(e.target.value);
            setClassValues(spread);
          }}
          isInline
        >
          <Text>Category:</Text>
          <Radio value="1">Crossfit</Radio>
          <Radio value="2">Gymnastics</Radio>
        </RadioGroup>
        <Text cursor="pointer" color="red.600" mt="0" onClick={handleRemove}>
          Remove
        </Text>
      </Flex>
    </Box>
  );
};
