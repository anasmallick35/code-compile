import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoTrashOutline } from 'react-icons/io5';
import { BiEditAlt } from 'react-icons/bi';
import { FcOpenedFolder } from 'react-icons/fc';
import logo from '../../assets/logo.png';
import { ModalContext } from '../../context/ModalContext';
import { PlaygroundContext } from '../../context/PlaygroundContext';
import { useNavigate } from 'react-router-dom';

const StyledRightComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
    background-color: #f5f5f5;
    min-height: 100vh;
    overflow-y: auto;

    @media (max-width: 768px) {
        position: relative;
        width: 100%;
        padding: 1rem 0.5rem;
    }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #c5c5c5;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  font-size: ${({ size }) => (size === 'small' ? '1.25rem' : '1.75rem')};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  span {
    font-weight: 700;
    color: #3949ab;
  }
`;

const AddButton = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: #3949ab;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 1rem;
    background-color: #e8eaf6;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    span {
        font-size: 1.5rem;
        font-weight: 700;
    }

    &:hover {
        cursor: pointer;
        background-color: #c5cae9;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
    }
`;

const FolderCard = styled.div`
    margin-bottom: 2rem;
`;

const FolderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
    svg {
        color: #3949ab;
        transition: color 0.2s ease;
        &:hover {
            color: #1a237e;
        }
    }
`;

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 428px) {
        grid-template-columns: 1fr;
    }    
`;

const Card = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.15);
    }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardContent = styled.div`
    p {
        margin: 0;
        color: #333;
        font-weight: 500;
    }
`;

const Logo = styled.img`
    width: 70px;
    margin-right: 1rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 425px) {
        width: 50px;
        margin-right: 0.5rem;
    }
`;

const RightComponent = () => {
  const navigate = useNavigate();

  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);

  return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
          My <span>Playground</span>
        </Heading>
        <AddButton onClick={() => openModal({
          show: true,
          modalType: 1,
          identifiers: {
            folderId: "",
            cardId: "",
          }
        })}> <span>+</span> New Folder</AddButton>
      </Header>

      {Object.entries(folders).map(([folderId, folder]) => (
        <FolderCard key={folderId}>
          <Header>
            <Heading size="small">
              <FcOpenedFolder /> {folder.title}
            </Heading>
            <FolderIcons>
              <IoTrashOutline onClick={() => deleteFolder(folderId)} />
              <BiEditAlt onClick={() => openModal({
                show: true,
                modalType: 4,
                identifiers: {
                  folderId: folderId,
                  cardId: "",
                }
              })} />
              <AddButton onClick={() => openModal({
                show: true,
                modalType: 2,
                identifiers: {
                  folderId: folderId,
                  cardId: "",
                }
              })}><span>+</span> New Playground</AddButton>
            </FolderIcons>
          </Header>

          <PlayGroundCards>
            {Object.entries(folder['playgrounds']).map(([playgroundId, playground]) => (
              <Card key={playgroundId} onClick={() => navigate(`/playground/${folderId}/${playgroundId}`)}>
                <CardContainer>
                  <Logo src={logo} />
                  <CardContent>
                    <p>{playground.title}</p>
                    <p>Language: {playground.language}</p>
                  </CardContent>
                </CardContainer>
                <FolderIcons onClick={(e) => e.stopPropagation()}>
                  <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                  <BiEditAlt onClick={() => openModal({
                    show: true,
                    modalType: 5,
                    identifiers: {
                      folderId: folderId,
                      cardId: playgroundId,
                    }
                  })} />
                </FolderIcons>
              </Card>
            ))}
          </PlayGroundCards>
        </FolderCard>
      ))}
    </StyledRightComponent>
  );
};

export default RightComponent;
