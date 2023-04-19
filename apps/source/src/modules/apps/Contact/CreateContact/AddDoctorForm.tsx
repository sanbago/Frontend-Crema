import React, { useContext, useEffect, useState } from 'react';
import { alpha, Box, Button, Select } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Field, Form } from 'formik';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Fonts } from '@crema/constants/AppEnums';
import EditIcon from '@mui/icons-material/Edit';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppTextField from '@crema/components/AppTextField';
import AppDateFiled from '@crema/components/AppDateFiled';

import { styled } from '@mui/material/styles';
import { ContactObjType, DoctorObjType } from '@crema/models/apps/Contact';
import { useContactContext } from '../../context/ContactContextProvider';
import AppSelect from '@crema/components/AppSelect';
import BasicSelect, { Option } from './BasicSelect';
import { getDataApi } from '@crema/hooks/APIHooks';
import { InfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import jwtAxios from '@crema/services/auth/JWT';

interface SelectOption<T> {
  label: string;
  value: T;
}

const HeaderWrapper = styled('div')(({ theme }) => {
  return {
    padding: 20,
    marginLeft: -24,
    marginRight: -24,
    marginTop: -20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& .dropzone': {
      outline: 0,
      '&:hover .edit-icon, &:focus .edit-icon': {
        display: 'flex',
      },
    },
  };
});

const AvatarViewWrapper = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    cursor: 'pointer',
    '& .edit-icon': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 1,
      border: `solid 2px ${theme.palette.background.paper}`,
      backgroundColor: alpha(theme.palette.primary.main, 0.7),
      color: theme.palette.primary.contrastText,
      borderRadius: '50%',
      width: 26,
      height: 26,
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s ease',
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },
  };
});

const options: SelectOption<any>[] = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
];

type Props = {
  values: DoctorObjType;
  setFieldValue: (name: string, value: any) => void;
  handleAddContactClose: () => void;
};






const AddDoctorForm = (props: Props) => {
  const { values, setFieldValue } = props;
  const { labelList } = useContactContext();

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: {
  //     'image/png': ['.png', '.jpg', '.jpeg'],
  //   },
  //   onDrop: (acceptedFiles) => {
  //     setUserImage(URL.createObjectURL(acceptedFiles[0]));
  //   },
  // });
  const [medicalProfessions, setMedicalProfessions] = useState([]);
  const [doctorSpecialities, setDoctorSpecialities] = useState([]);


  jwtAxios.get('medical-professions')
  .then((response) => {
    setMedicalProfessions(response.data)
  })
  .catch((error) => {
    console.log(error);
  });  

  jwtAxios.get('doctor-specialities')
  .then((response) => {
    setDoctorSpecialities(response.data)
  })
  .catch((error) => {
    console.log(error);
  });  


  const { messages } = useIntl();

  return (
    <Form noValidate autoComplete="off">
      {/* <HeaderWrapper>
        {values.professionalCard  ? (
          <Box component="h4" fontWeight={Fonts.SEMI_BOLD} mt={2}>
            {values.professionalCard }
          </Box>
        ) : null}
      </HeaderWrapper> */}

      <Box
        sx={{
          padding: 5,
          ml: -6,
          mr: -6,
        }}
      >
        <Box
          sx={{
            pb: 5,
            px: 5,
            mx: -5,
            mb: 5,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component="h6"
            sx={{
              mb: { xs: 4, xl: 6 },
              fontSize: 14,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <IntlMessages id="professionalApp.doctorDetails" />
          </Box>

          <div>
            <AppTextField
              sx={{
                width: '100%',
                mb: { xs: 4, xl: 6 },
              }}
              variant="outlined"
              label={<IntlMessages id="common.professionalCard" />}
              name="professionalCard"
            />

            <AppTextField
              sx={{
                width: '100%',
                mb: { xs: 4, xl: 6 },
              }}
              variant="outlined"
              label={<IntlMessages id="common.signaturePath" />}
              name="signaturePath"
            />

            <BasicSelect  name='medicalProfessionId' options={medicalProfessions} title='Med. Professions'/>

            <BasicSelect  name='specialityId' options={doctorSpecialities} title='Doc. Specialities'/>

            {/* <AppTextField
              sx={{
                width: '100%',
                mb: { xs: 4, xl: 6 },
              }}
              variant="outlined"
              label={<IntlMessages id="common.specialityId" />}
              name="specialityId"
            /> */}
            <AppGridContainer spacing={5}>
              {/* <Grid item xs={12} md={6}>
                <AppDateFiled
                  autoOk={true}
                  disableFuture
                  sx={{
                    width: '100%',
                    mb: { xs: 4, xl: 6 },
                  }}
                  format="MM/DD/YYYY"
                  variant="outlined"
                  inputVariant="outlined"
                  label={<IntlMessages id="common.birthday" />}
                  name="birthday"
                  value={values.birthday}
                  onChange={(value: any) => setFieldValue('birthday', value)}
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  sx={{
                    width: '100%',
                  }}
                >
                  <InputLabel id="label-select-outlined-label">
                    <IntlMessages id="common.selectLabel" />
                  </InputLabel>
                  <Field
                    name="label"
                    label={<IntlMessages id="common.selectLabel" />}
                    labelId="label-select-outlined-label"
                    as={Select}
                    sx={{
                      width: '100%',
                      mb: { xs: 4, xl: 6 },
                    }}
                  >
                    {labelList.map((label) => {
                      return (
                        <MenuItem
                          value={label.id}
                          key={label.id}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          {label.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid> */}
            </AppGridContainer>
            {/* <AppTextField
              sx={{
                mt:5,
                width: '100%',
              }}
              variant="outlined"
              label={<IntlMessages id="common.website" />}
              name="website"
            /> */}
          </div>
        </Box>

        {/* Codigo Comentado al final iba aqui: */}
      </Box>

      <Box
        sx={{
          pb: 4,
          mx: -1,
          textAlign: 'right',
        }}
      >
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
          }}
          color="primary"
          variant="outlined"
          type="submit"
        >
          <IntlMessages id="common.save" />
        </Button>
      </Box>
    </Form>
  );
};

export default AddDoctorForm;

{/* <Box
          sx={{
            pb: 5,
            px: 5,
            mx: -5,
            mb: 5,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component="h6"
            sx={{
              mb: { xs: 4, xl: 6 },
              fontSize: 14,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <IntlMessages id="common.otherDetails" />
          </Box>

          <div>
            <AppTextField
              sx={{
                width: '100%',
                mb: { xs: 4, xl: 6 },
              }}
              variant="outlined"
              label={<IntlMessages id="common.company" />}
              name="company"
            />

            <AppTextField
              sx={{
                width: '100%',
              }}
              variant="outlined"
              label={<IntlMessages id="common.address" />}
              name="address"
            />
          </div>
        </Box>

        <Box
          sx={{
            pb: 5,
            px: 5,
            mx: -5,
            mb: 5,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component="h6"
            sx={{
              mb: { xs: 4, xl: 6 },
              fontSize: 14,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <IntlMessages id="common.socialMedia" />
          </Box>

          <div>
            <AppTextField
              sx={{
                width: '100%',
                mb: { xs: 4, xl: 6 },
              }}
              variant="outlined"
              label={<IntlMessages id="common.facebookId" />}
              name="facebookId"
            />

            <AppTextField
              sx={{
                width: '100%',
              }}
              variant="outlined"
              label={<IntlMessages id="common.twitterId" />}
              name="twitterId"
            />
          </div>
        </Box>

        <div>
          <Box
            component="h6"
            sx={{
              mb: { xs: 4, xl: 6 },
              fontSize: 14,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <IntlMessages id="common.notes" />
          </Box>

          <AppTextField
            name="notes"
            multiline
            sx={{
              width: '100%',
            }}
            rows="4"
            variant="outlined"
            placeholder={messages['common.notes'] as string}
          />
          </div>*/}