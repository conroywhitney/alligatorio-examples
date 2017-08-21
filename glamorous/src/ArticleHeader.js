import React, { Component } from "react";
import glamorous from "glamorous";

import baseStyles from "./baseStyles";
import colors from "./colors";
import fonts from "./fonts";

const Header = glamorous.header({
  ...baseStyles.header,
  width: "850px"
});

const Title = glamorous.h1(
  {
    ...baseStyles.h1,
    fontFamily: fonts.sansSerif,
    fontStyle: "italic"
  },
  ({ lightBackground = false }) => ({
    color: lightBackground ? colors.green : colors.white
  })
);

const BorderedBox = glamorous.span({
  ...baseStyles.borderedBox,
  borderColor: colors.pink
});

const AuthorLink = glamorous.a({
  ...baseStyles.a,
  color: colors.red,
  fontFamily: fonts.mono
});

class ArticleHeader extends Component {
  render() {
    return (
      <Header>
        <Title lightBackground>
          Creating Styled React Components with Glamorous
        </Title>
        <BorderedBox>
          <AuthorLink href="https://alligator.io/author/conroy-whitney">
            Conroy Whitney
          </AuthorLink>
        </BorderedBox>
      </Header>
    );
  }
}

export default ArticleHeader;
