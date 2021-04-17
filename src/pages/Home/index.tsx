import React, { useState, useCallback } from 'react';
import Input from '../../components/Input';
import { IoIosSearch } from 'react-icons/io';
import {
  Container,
  ContainerCenter,
  ContainerUrls,
  ContainerImg,
} from './styles';
import Logo from '../../images/LOGO-AXUR.png';
import { postSolicitation, getSolicitation } from '../../services/api';
import {
  PostSolicitationResp,
  GetSolicitationResp,
} from '../../services/types';

const Home: React.FC = () => {
  const [solicitation, setSolicitation] = useState<GetSolicitationResp>();
  const [search, setSearch] = useState('');

  const handleSearch = useCallback(() => {
    postSolicitation({ keyword: search })
      .then((data: PostSolicitationResp) => {
        getSolicitation(data.id)
          .then((dataGet: GetSolicitationResp) => {
            setSolicitation(dataGet);
          })
          .catch((e: Error) => console.log(e));
      })
      .catch((e: Error) => console.log(e));
  }, [search]);

  return (
    <Container>
      <ContainerCenter>
        <ContainerImg>
          <img src={Logo} alt="axur logo" />
        </ContainerImg>
        <Input
          icon={IoIosSearch}
          name="search"
          placeholder="
            Enter your authorization request
          "
          onChange={event => setSearch(event.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <ContainerUrls>
          {solicitation && solicitation.urls && solicitation.urls.length > 0 ? (
            <>
              <h3>
                Resultados encontrados <b>({solicitation.urls.length})</b>
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
            <h3>Nenhum resultado encontrado</h3>
          ) : (
            ''
          )}
        </ContainerUrls>
      </ContainerCenter>
    </Container>
  );
};

export default Home;
