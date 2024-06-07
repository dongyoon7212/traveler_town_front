/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from "../../../assets/logo.png";

function Header() {
    return (
        <div css={s.header}>
            <div css={s.navBox}>
                <div css={s.logo}>
                    <img src={logo} alt="" />
                    TravelerTown
                </div>
                <div css={s.menu}>
                    <div>동행</div>
                    <div>여행지</div>
                    <div>관광지</div>
                    <div>맛집</div>
                </div>
                <div css={s.login}>로그인</div>
            </div>
        </div>
    );
}

export default Header;