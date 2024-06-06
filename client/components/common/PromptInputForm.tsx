import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { TextFieldProps, ButtonProps } from '@mui/material';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER_ID } from '@/mocks';

interface UserInputPayload {
  input: string;
}

const UserInputBar = styled(TextField)<TextFieldProps>(({ theme }) => ({
  width: 700,
  color: theme.palette.secondary.main,
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    '& fieldset': {
      borderColor: theme.palette.secondary.main,
      borderRadius: '20px',
    },
    '& input': {
      backgroundColor: theme.palette.grey[400],
      borderRadius: '20px',
      color: 'black',
    },
  },
}));

const GenerateButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: 40,
  width: 150,
  color: 'black',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 20,
  textTransform: 'none',
}));

const PromptInputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCheckedState = localStorage.getItem('isChecked');
    if (savedCheckedState === 'true') {
      setIsChecked(true);
    }
  }, []);

  const newUserInputMutation = useMutation({
    mutationFn: async (userInput: UserInputPayload) => {
      const uniqueRequestId = crypto.randomUUID().toString();
      console.log('userInput looks like this: ', userInput);
      const response = await axios.post(
        'http://localhost:3000/v1/inputs',
        {
          userId: MOCK_USER_ID,
          input: userInput.input,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer TOKEN_PLACEHOLDER',
            requestId: uniqueRequestId,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log('UserInput sent successfully', data);
      navigate('/output');
    },
    onError: (error) => {
      console.error('Error sending prompt: ', error);
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    newUserInputMutation.mutate({ input: inputValue });
  };

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);
    localStorage.setItem('isChecked', newCheckedState.toString());
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <Typography
        variant="h6"
        sx={{ width: '700px', textAlign: 'left', color: 'text.primary', mb: 2 }}
      >
        Start your learning journey here:
      </Typography>
      <Box
        width="700px"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <UserInputBar
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxClick}
              color="primary"
            />
          }
          label="Content on this site may be generated by artifical intelligence (AI). Please use discretion and verify information where necessary."
          sx={{ color: 'text.primary' }}
        />
        <GenerateButton
          disabled={!isChecked}
          sx={{ alignSelf: 'center' }}
          onClick={handleSubmit}
        >
          Generate
        </GenerateButton>
      </Box>
    </Box>
  );
};

export default PromptInputForm;
