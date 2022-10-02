import styled from 'styled-components'
import logo from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
    flex:1;
    font-size:14px;
    height:100%
    ;
    color:white;
    background-color:#202020;
`
const Wrapper =styled.div`
    padding:18px 26px
`

const Logo =styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-weight:bold;
    margin-bottom:25px;
`
const Img =styled.img`
    height:25px
`
const Item =styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    cursor:pointer;
    padding:7px 0px;
`   
const Hr =styled.hr`
    margin:15px 0px;
    border:0.5px solid #373737
`
const Login =styled.div``
const Button =styled.button`
    padding:5px 15px;
    background-color:transparent;
    border:1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius:3px;
    font-weight:500;
    margin-top:10px;
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
`
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          AKZ MEDIA
        </Logo>
        <Item>
          <HomeIcon/>
          Home
        </Item>
        <Item>
          <ExploreIcon/>
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon/>
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <LibraryBooksIcon/>
          Library
        </Item>
        <Item>
          <HistoryIcon/>
          History
        </Item>
        <Hr />
        <Login >
            Login in to like videos,comment, and subscribe
          <Button><PersonIcon /> SIGN IN</Button>
        </Login>
        <Hr />
        <Item>
          <LibraryMusicIcon/>
          Music
        </Item>
        <Item>
          <SportsBaseballOutlinedIcon/>
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon/>
          Gaming
        </Item>
        <Item>
          <MovieCreationOutlinedIcon/>
          Movies
        </Item>
        <Item>
          <NewspaperOutlinedIcon/>
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon/>
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon/>
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon/>
          Report
        </Item>
        <Item>
          <HelpCenterOutlinedIcon/>
          Help
        </Item>
        <Item>
          <LightModeOutlinedIcon/>
          Light Mode
        </Item>

      </Wrapper>
    </Container>
  )
}

export default Menu