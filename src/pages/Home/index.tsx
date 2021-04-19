import React, { useState } from 'react';
import Input from '../../components/Input';
import { IoIosSearch } from 'react-icons/io';
import {
  Container,
  ContainerCenter,
  ContainerUrls,
  ContainerImg,
  ContainerInputButton,
} from './styles';
import Button from '../../components/Button';
import Logo from '../../images/LOGO-AXUR.png';
import { postSolicitation, getSolicitation } from '../../services/api';
import {
  PostSolicitationResp,
  GetSolicitationResp,
} from '../../services/types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Home: React.FC = () => {
  const [solicitation, setSolicitation] = useState<GetSolicitationResp>();
  const [isLoading, setIsLoading] = useState(false);

  //Yup
  const userSchema = Yup.object({
    search: Yup.string()
      .required('this field is required')
      .min(4, 'At least 4 digits must be filled'),
  });
  //Formik
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: userSchema,
    onSubmit: async values => {
      console.log('oi');
      setIsLoading(true);
      postSolicitation({ keyword: values.search })
        .then((data: PostSolicitationResp) => {
          getSolicitation(data.id)
            .then((dataGet: GetSolicitationResp) => {
              setSolicitation(dataGet);
              console.log(dataGet);
              setIsLoading(false);
            })
            .catch((e: Error) => {
              console.log(e);
              setIsLoading(false);
            });
        })
        .catch((e: Error) => {
          console.log(e);
          setIsLoading(false);
        });
    },
  });

  return (
    <Container>
      <ContainerCenter>
        <ContainerImg>
          <img src={Logo} alt="axur logo" />
        </ContainerImg>
        <ContainerInputButton>
          <Input
            icon={IoIosSearch}
            name="search"
            error={
              formik.errors.search && formik.touched.search
                ? formik.errors.search
                : ''
            }
            placeholder="
            Enter your authorization request
          "
            onChange={formik.handleChange}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                formik.handleSubmit();
              }
            }}
          />
          <Button
            type="button"
            isLoading={isLoading}
            onClick={() => formik.handleSubmit()}
          >
            Search
          </Button>
        </ContainerInputButton>
        <ContainerUrls>
          {solicitation && solicitation.urls && solicitation.urls.length > 0 ? (
            <>
              <h3>
                Results Found <b>({solicitation.urls.length})</b>
              </h3>
              {solicitation?.urls.map((url, key) => (
                <a
                  key={key}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                >
                  {url}
                </a>
              ))}
            </>
          ) : solicitation &&
            solicitation.urls &&
            solicitation.urls.length === 0 ? (
            <h3>No Results Found</h3>
          ) : (
            ''
          )}
        </ContainerUrls>
      </ContainerCenter>
    </Container>
  );
};

export default Home;
