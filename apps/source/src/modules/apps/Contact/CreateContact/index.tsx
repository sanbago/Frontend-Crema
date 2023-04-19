import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AddContactForm from './AddDoctorForm';
import AppDialog from '@crema/components/AppDialog';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { useIntl } from 'react-intl';
import { useContactActionsContext } from '../../context/ContactContextProvider';
import AddDoctorForm from './AddDoctorForm';
import { DoctorObjType } from '@crema/models/apps/Contact';
import jwtAxios from '@crema/services/auth/JWT';

type Props = {
  isAddContact: boolean;
  handleAddContactClose: () => void;
  selectContact?: DoctorObjType | null;
  onUpdateContact?: (newContact: DoctorObjType) => void;
};

const CreateDoctor = (props: Props) => {
  const {
    isAddContact,
    handleAddContactClose,
    selectContact,
    onUpdateContact,
  } = props;
  const { reCallAPI } = useContactActionsContext();

  const { messages } = useIntl();

  const validationSchema = yup.object({
    professionalCard: yup
    .string()
    .min(4, String(messages['validation.professionalCardSize']))
    .required(String(messages['validation.professionalCardRequired'])),//antiguo name
    signaturePath: yup //antiguo email 
      .string()
      .min(10, String(messages['validation.signaturePathSize']))
      .required(String(messages['validation.signaturePathRequired'])),
      medicalProfessionId: yup //antiguo contact
      .number()
      .oneOf([1, 2, 3, 4, 5, 6])
      .required(String(messages['validation.medicalProfessionIdRequired'])),
      specialityId: yup //antiguo contact
      .number()
      .oneOf([1, 2, 3])
      .required(String(messages['validation.specialityIdRequired'])),

  });
  const infoViewActionsContext = useInfoViewActionsContext();

  // const [userImage, setUserImage] = useState(
  //   selectContact && selectContact.image
  //     ? selectContact.image
  //     : '/assets/images/placeholder.jpg'
  // );
  // useEffect(() => {
  //   setUserImage(
  //     selectContact && selectContact.image
  //       ? selectContact.image
  //       : '/assets/images/placeholder.jpg'
  //   );
  // }, [selectContact]);

  return (
    <AppDialog
      fullHeight
      open={isAddContact}
      onClose={() => handleAddContactClose()}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          professionalCard: selectContact && selectContact ? selectContact.professionalCard : '',
          signaturePath: selectContact && selectContact ? selectContact.signaturePath : '',
          medicalProfessionId: selectContact && selectContact.medicalProfessionId ? selectContact.medicalProfessionId : '',
          specialityId: selectContact && selectContact.specialityId ? selectContact.specialityId : '',
          userId: selectContact && selectContact.userId ? selectContact.userId : '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectContact) {
            const newContact = {
              ...data,
            } as DoctorObjType;
            putDataApi('doctors', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact updated successfully!'
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
            onUpdateContact!(newContact);
          } else {
            const userId = localStorage.getItem('id')
            const newContact = {
              ...data,
              userId
            };
            console.log(newContact)
            // postDataApi('doctors', infoViewActionsContext, newContact)
            //   .then(() => {
            //     reCallAPI();
            //     infoViewActionsContext.showMessage(
            //       'Contact created successfully!'
            //     );
            //   })
            //   .catch((error) => {
            //     infoViewActionsContext.fetchError(error.message);
            //   });
            const token = localStorage.getItem('token');
            jwtAxios.post('doctors', newContact, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              console.log('El nuevo doctor ha sido creado:', response.data);
            })
            .catch(error => {
              console.error('Error al crear el nuevo doctor:', error);
          })
          handleAddContactClose();
          resetForm();
          setSubmitting(false);
        }}}
      >
        {({ values, setFieldValue }) => (
          <AddDoctorForm
            values={values as DoctorObjType}
            setFieldValue={setFieldValue}
            handleAddContactClose={handleAddContactClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default CreateDoctor;

CreateDoctor.defaultProps = {
  selectContact: null,
};
