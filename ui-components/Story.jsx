/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Story(props) {
  const { postModel, overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="column"
      width="380px"
      height="379px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="12px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Story")}
      {...rest}
    >
      <Image
        width="unset"
        height="128px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        opacity="0.699999988079071"
        objectFit="cover"
        src="https://cdn.discordapp.com/attachments/989268410171006976/1103497527115923566/Rodrigo_Fuente_A_house_is_coming_out_of_a_magic_book_IN_3D_proj_bda6f997-b8a8-48c1-99b5-2d262d2b1338.png"
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(129,94,134,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={postModel?.title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={postModel?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <View
        width="unset"
        height="1.2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="0.2px SOLID rgba(235,244,241,1)"
        padding="0px 0px 0px 0px"
        opacity="0.20000000298023224"
        {...getOverrideProps(overrides, "Divider")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${postModel?.readTime}${"mins read"}`}
        {...getOverrideProps(overrides, "ReadTime")}
      ></Text>
    </Flex>
  );
}
