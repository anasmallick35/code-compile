import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { ModalContext } from '../../context/ModalContext';

const StyledLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background: linear-gradient(135deg, #1a237e, #3949ab);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
        position: relative;
        width: 100%;
        height: auto;
    }
`;

const ContentContainer = styled.div`
    text-align: center;
`;

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const MainHeading = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;

    span {
        font-weight: 700;
        color: #ffeb3b;
    }
`;

const SubHeading = styled.div`
    font-size: 1.25rem;
    color: #e3f2fd;
    opacity: 0.8;
    margin-bottom: 2rem;
`;

const AddNewButton = styled.button`
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    background-color: #ffeb3b;
    color: #000;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 0px 10px 3px rgba(255, 235, 59, 0.5);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;

    span {
        font-size: 2rem;
        font-weight: 700;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 0px 0px 12px 4px rgba(255, 235, 59, 0.7);
    }
`;

const LeftComponent = () => {
    const { openModal } = useContext(ModalContext);

    return (
        <StyledLeftComponent>
            <ContentContainer>
                <Logo src={logo} alt="Code Fresh Logo" />
                <MainHeading>
                    <span>Code</span> Fresh
                </MainHeading>
                <SubHeading>Code. Compile. Debug.</SubHeading>
                <AddNewButton
                    onClick={() =>
                        openModal({
                            show: true,
                            modalType: 3,
                            identifiers: {
                                folderId: '',
                                cardId: '',
                            },
                        })
                    }
                >
                    <span>+</span> Create New Playground
                </AddNewButton>
            </ContentContainer>
        </StyledLeftComponent>
    );
};

export default LeftComponent;
