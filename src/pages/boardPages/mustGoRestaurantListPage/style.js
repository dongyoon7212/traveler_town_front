import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: auto;
    padding-top: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const box = css`
    width: 1136px;
    height: auto;

    & > h1 {
        cursor: default;
    }
`;

export const titleBox = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const searchBox = css`
    width: 300px;
    height: 48px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
<<<<<<< 82-맛집-게시글-작성-페이지-구현
=======

    & > input {
        width: 693px;
        height: 19px;
        border: none;
        outline: none;
        margin-left: 15px;
        font-size: 16px;
    }

    & > button {
        padding-right: 10px;
        border: none;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
    }
>>>>>>> main
`;

export const listHeader = css`
    width: 100%;
    display: flex;
<<<<<<< 82-맛집-게시글-작성-페이지-구현
    justify-content: space-between;
=======
>>>>>>> main
    align-items: center;
    margin: 30px 0;

    & > div {
<<<<<<< 82-맛집-게시글-작성-페이지-구현
        display:flex;
        justify-content: center;
    }

    & > div > div {
=======
>>>>>>> main
        margin: 0 25px;
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            text-underline-offset: 5px;
        }
    }
<<<<<<< 82-맛집-게시글-작성-페이지-구현

    & > button {
        margin-right: 25px;
        width: 50px;
        height: 50px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
        border: none;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:white;
        font-size: 20px;
        font-weight: 800;
        border-radius: 50%;
        transition: all 0.3s;
        cursor: pointer;

        &: hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
=======
>>>>>>> main
`;

export const listLayout = css`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const listWrap = css`
    width: 1136px;
    display: grid;
    grid-template-columns: repeat(3, calc(33.33% - 32px * 2 / 3));
    grid-gap: 32px;
`;

export const boardCard = css`
    width: 100%;
    height: 370px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    transition: 0.2s ease-in-out;
    overflow: hidden;

    &:hover {
        margin-top: -10px;
    }
`;

export const imgBox = css`
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const boardInfo = css`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
`;

export const boardText = css`
    width: 100%;
    height: 75%;

    & > h3 {
        height: 20%;
        margin: 0;
        margin-bottom: 10px;
        padding: 20px 0 0 20px;
    }

    & > div {
        height: 80px;
        padding: 0 20px;
        color: #333333;
        font-size: 16px;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    }
`;

export const profileBox = css`
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;

    & > img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        margin-right: 10px;
        border-radius: 15px;
    }
`;

export const nickname = css`
    font-weight: 600;
`;
