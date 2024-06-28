import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import userInputValidationSchema from '@zod/validateUserInput';
import {
  TextField,
  Button,
  FormControlLabel,
  Box,
  Typography,
  Checkbox,
} from '@mui/material';

import styles from '@styles/UserInputView.module.css';
import { auth } from '@/firebase/firebaseConfig';
import type { UserInputPayload } from '../UserInput';
import { useNewUserInputMutation } from '@/hooks/newUserInputMutation';

interface CustomFormData {
  input: string;
  isChecked: boolean;
}

const UserInputForm = () => {
  // Here we utilize the useForm hook's properties to manage form state while also initializing default values and resolving our validation schema.
  // The control object is used by react-hook-form's Controller to link our UserInputBar and UserInputCheckbox components to the form's state, handling any necessary state updates or validation checks.
  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: zodResolver(userInputValidationSchema),
    defaultValues: {
      input: '',
      isChecked: JSON.parse(localStorage.getItem('isChecked') || 'false'),
    },
  });
  const navigate = useNavigate();
  const newUserInputMutation = useNewUserInputMutation();
  // Here we utilize the watch function to subscribe to checkbox state changes and save those changes to our localStorage.
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'isChecked') {
        localStorage.setItem('isChecked', value.isChecked);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<CustomFormData> = async (data) => {
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) throw new Error('No ID token available');

      const userInput: UserInputPayload = {
        input: data.input,
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      };

      newUserInputMutation.mutate(userInput, {
        onSuccess: () => {
          reset();
          navigate('/output');
        },
        onError: (error) => {
          console.error('Error sending prompt: ', error);
        },
      });
    } catch (error) {
      console.error('Error fetching ID token', error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.userInputForm}`}
      >
        <Typography
          className={`${styles.userInputFormTitle}`}
          variant='h6'
          sx={{ textAlign: 'left', color: 'text.primary', mb: 2 }}
        >
          Start your learning journey here:
        </Typography>

        <Box className={`${styles.inputsContainer}`}>
          <Controller
            name='input'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='outlined'
                className={`${styles.userInputTextField}`}
                error={!!errors.input}
                helperText={errors.input ? errors.input.message : ''}
              />
            )}
          />

          <FormControlLabel
            className={`${styles.userInputDisclaimer}`}
            label='Content on this site may be generated by artifical intelligence (AI). Please use discretion and verify information where necessary.'
            sx={{ color: 'text.primary' }}
            control={
              <Controller
                name='isChecked'
                control={control}
                render={({ field }) => (
                  <Checkbox
                    className={`${styles.UserInputCheckbox}`}
                    {...field}
                    checked={field.value}
                  />
                )}
              />
            }
          />
        </Box>

        <Button
          variant='contained'
          className={`${styles.userInputSubmitButton}`}
          type='submit'
          disabled={isSubmitted || !control._formValues.isChecked}
        >
          {newUserInputMutation.status === 'pending' ? 'Loading' : 'Generate'}
        </Button>
      </form>
    </>
  );
};

export default UserInputForm;
