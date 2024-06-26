/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { getCountryNameKorAndCountryCodeAllRequest } from "../../../apis/country/countryApi";
import { useEffect, useState } from "react";
import BoardQuillComponent from "../BoardQuillComponent/BoardQuillComponent";

function BoardWriteComponent({
    boardTitle,
    setboardTitle,
    countryCode,
    setCountryCode,
    quillValue,
    quillOnChange,
    quillRef,
    buttonTitle,
    onClick,
}) {
    const [countries, setCountries] = useState([]);

    const getCountryNameKorAndCountryCodeAllRequestQuery = useQuery(
        ["getCountryNameKorAndCountryCodeAllRequestQuery"],
        async () => getCountryNameKorAndCountryCodeAllRequest(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setCountries(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const boardTitleOnChange = (e) => {
        setboardTitle(e.target.value);
    };

    const countryOnChange = (e) => {
        const countryTarget = countries.filter(
            (country) => country.countryNameKor === e.target.value
        )[0];
        setCountryCode(countryTarget);
    };

    return (
        <>
            <div css={s.layout}>
                <div css={s.titleLayout}>
                    <input
                        type="text"
                        value={boardTitle}
                        onChange={boardTitleOnChange}
                        placeholder="제목을 입력하세요"
                        css={s.boardTitleInput}
                    />
                </div>
                <div css={s.countriesLayout}>
                    <div css={s.countriesCard}>
                        <input
                            type="text"
                            value={countryCode?.countryNameKor}
                            onChange={countryOnChange}
                            list="list"
                            id="countries"
                            placeholder="해당 국가를 선택 / 입력하세요"
                            css={s.countriesSelectInput}
                        />
                        <datalist id="list">
                            {countries.map((country) => (
                                <option
                                    key={country.countryCode}
                                    value={country.countryNameKor}
                                />
                            ))}
                        </datalist>
                    </div>
                    <button onClick={onClick} css={s.submitButton}>
                        {buttonTitle}
                    </button>
                </div>
            </div>
            <div css={s.writeLayout}>
                <BoardQuillComponent
                    value={quillValue}
                    onChange={quillOnChange}
                    ref={quillRef}
                    height={600}
                />
            </div>
        </>
    );
}

export default BoardWriteComponent;
