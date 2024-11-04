import rawg from 'assets/images/RAWG.png'
import { ReactComponent as Github } from 'assets/images/github.svg'
import {
  StyledDescription,
  Pitch,
  Links,
  Link,
  RAWGLogo,
  EnjoyBlock,
  Header,
} from 'pages/Home/Description/styles'

const Description = () => (
  <StyledDescription>
    <Pitch>
      <Header>GameStop</Header>
      <p>
      This is not a commercial project. No games are available for purchase here, and all prices are generated to simulate a genuine game shop experience. Our aim is to provide an engaging environment for users to explore without any actual transactions taking place.
      </p>
      {/* <EnjoyBlock>
        <p>Enjoy</p> <p>😉</p>
      </EnjoyBlock> */}
    </Pitch>
    <Links>
      {/* <Link href="https://github.com/alex-dishen" target="_blank">
        <Github />
        alex-dishen
      </Link> */}
      <Link href="https://rawg.io/apidocs" target="_blank">
        <RAWGLogo src={rawg} alt="RAWG logo" />
        RAWG API
      </Link>
    </Links>
  </StyledDescription>
)

export default Description
