/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/스위스.jpeg";
import defaultProfileImg from "../../../assets/defaultImg.webp";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMustGoRestaurantAll, getMustGoRestaurantAllBySearch } from "../../../apis/board/mustGoRestaurantApi";
import BoardCardComponent from "../../../components/BoardPage/BoardCardComponent/BoardCardComponent";
import BoardSearchComponent from "../../../components/BoardPage/BoardSearchComponent/BoardSearchComponent";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function MustGoRestaurantListPage(props) {
    const [mustGoRestaurants, setMustGoRestaurants] = useState([]);
    const [boardTitle, setBoardTitle] = useState("");
    const [searchState, setSearchState] = useState(false);
    const navigator = useNavigate();

    const searchKeyDown = (e) => {
        if(e.key === "Enter") {
            setSearchState(true);
        }
    }

    const mustGoRestaurantsQuery = useQuery(
        ["mustGoRestaurantsQuery"],
        async () => await getMustGoRestaurantAll(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMustGoRestaurants(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const mustGoRestaurantsSearchQuery = useQuery(
        ["mustGoRestaurantsSearchQuery", boardTitle],
        async () => await getMustGoRestaurantAllBySearch({
            boardTitle: boardTitle
        }),
        {
            enabled: !!boardTitle && searchState,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMustGoRestaurants(response.data);
                setSearchState(false);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    );

    useEffect(() => {
        console.log(mustGoRestaurants);
    }, [mustGoRestaurants]);

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>맛집</h1>
                    <div css={s.searchBox}>
                        <BoardSearchComponent setSearchText={setBoardTitle} onKeyDown={searchKeyDown} placeholder={"게시물 검색"} onClick={() => setSearchState(true)} />
                        {/* <input type="text" placeholder="게시물 검색"/>
                        <button>
                            <IoSearchOutline />
                        </button> */}
                    </div>
                </div>
                <div css={s.listHeader}>
                    <div>
                        <div>최신</div>
                        <div>인기</div>
                    </div>
                    <button onClick={() => navigator("/board/mustgorestaurant/write")}><TfiWrite/></button>
                </div>
                <div css={s.listLayout}>
                    <div css={s.listWrap}>
                        {mustGoRestaurants.map((data) => (
                            <BoardCardComponent
                                key={data.boardId}
                                boardTitle={data.boardTitle}
                                boardContent={data.boardContent}
                                createDate={data.createDate}
                                updateDate={data.updateDate}
                                profileImg={data.profileImg}
                                nickname={data.nickname}
                                countryNameKor={data.countryNameKor}
                            />
                        ))}

                        {/* 지우지 마세요 */}
                        <div css={s.boardCard}>
                            <div css={s.imgBox}>
                                <img src={defaultImg} alt="" />
                            </div>
                            <div css={s.boardInfo}>
                                <div css={s.boardText}>
                                    <h3>스위스 맛집</h3>
                                    <div>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quod atque qui,
                                        molestiae non sapiente error quidem
                                        dolorem repellat veniam odio animi
                                        obcaecati voluptatem aperiam magnam cum
                                        tempore molestias provident esse.
                                    </div>
                                </div>
                                <div css={s.profileBox}>
                                    <img src={defaultProfileImg} alt="" />
                                    <div css={s.nickname}>nickname</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MustGoRestaurantListPage;