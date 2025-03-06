import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryRequiredMemberships: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onSecTitleContainerClick = useCallback(() => {
    router.push("/CL-2/care-library-required-membersh");
  }, [router]);

  const onSecTitleContainerClick1 = useCallback(() => {
    router.push("/CL-2/care-library-required-membersh4");
  }, [router]);

  const onSecTitleContainerClick2 = useCallback(() => {
    router.push("/CL-2/care-library-required-membership-primary-care");
  }, [router]);

  const onSecTitleContainerClick3 = useCallback(() => {
    router.push(
      "/CL-2/care-library-required-membership-domiciliary-care-agencies"
    );
  }, [router]);

  const onSecTitleContainerClick4 = useCallback(() => {
    router.push("/CL-2/care-library-required-membership-home-care");
  }, [router]);

  const onCareProviderAllianceClick = useCallback(() => {
    router.push(
      "/care-library-required-membership-care-provider-alliance-c-p-a"
    );
  }, [router]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "2826px",
          textAlign: "center",
          fontSize: "32px",
          color: "#5a5867",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "calc(50% - 916px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ position: "relative", lineHeight: "40px" }}>
              Required Memberships
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "1552px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{ position: "relative", lineHeight: "40px", fontWeight: "600" }}
          >
            Color Legends (Key)
          </Box>
          <Image
            style={{
              width: "31px",
              position: "relative",
              height: "31px",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
            }}
            width={31}
            height={31}
            alt=""
            src="/CL-2/chevron-11@2x.png"
          />
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "48px",
            height: "48px",
            cursor: "pointer",
          }}
          width={48}
          height={48}
          alt=""
          src="/CL-2/iconslineararrowleft.svg"
          onClick={onIconslineararrowLeftClick}
        />
        <Box
          sx={{
            position: "absolute",
            top: "167px",
            left: "38px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1844px",
            height: "2621px",
            color: "#1c3f95",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "86px",
              left: "30px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1782px",
              height: "483px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  lineHeight: "40px",
                  fontWeight: "600",
                }}
              >{`International `}</Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "80px",
                left: "50px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1699px",
                height: "319px",
                fontSize: "16px",
                fontFamily: "'Red Hat Text'",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "32px",
                  fontFamily: "Outfit",
                }}
                onClick={onSecTitleContainerClick}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Voluntary Organisations
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "69px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-43@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Research and Identify
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "524px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-44@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Membership Application
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "979px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-45@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >{`Participation and Engagement `}</Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1434px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-73@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Compliance and Contributions
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "272px",
                  width: "214px",
                  height: "0.5px",
                  objectFit: "contain",
                }}
                width={214}
                height={1}
                alt=""
                src="/CL-2/arrow-581.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "769px",
                  maxHeight: "100%",
                  width: "174px",
                }}
                width={174}
                height={15}
                alt=""
                src="/CL-2/arrow-591.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1223px",
                  maxHeight: "100%",
                  width: "164px",
                }}
                width={164}
                height={15}
                alt=""
                src="/CL-2/arrow-61.svg"
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "625px",
              left: "30px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1782px",
              height: "1943px",
              fontSize: "16px",
              fontFamily: "'Red Hat Text'",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "32px",
                fontFamily: "Outfit",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  lineHeight: "40px",
                  fontWeight: "600",
                }}
              >{`National `}</Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "80px",
                left: "50px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1699px",
                height: "319px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "32px",
                  fontFamily: "Outfit",
                }}
                onClick={onSecTitleContainerClick1}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "69px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-47@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >{`Identify Relevant Authority `}</Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "524px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-48@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Membership or Collaboration
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "979px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-49@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Proposal Submission
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1434px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-50@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Compliance and Agreements
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "272px",
                  width: "214px",
                  height: "0.5px",
                  objectFit: "contain",
                }}
                width={214}
                height={1}
                alt=""
                src="/CL-2/arrow-581.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "769px",
                  maxHeight: "100%",
                  width: "174px",
                }}
                width={174}
                height={15}
                alt=""
                src="/CL-2/arrow-591.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1223px",
                  maxHeight: "100%",
                  width: "164px",
                }}
                width={164}
                height={15}
                alt=""
                src="/CL-2/arrow-61.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "445px",
                left: "50px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1699px",
                height: "319px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "32px",
                  fontFamily: "Outfit",
                }}
                onClick={onSecTitleContainerClick2}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Primary Care
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "69px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-51@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Registration and Accreditation
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "752px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-52@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Partnership and Contracts
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1435px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-53@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Engagement
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "422px",
                  width: "214px",
                  height: "0.5px",
                  objectFit: "contain",
                }}
                width={214}
                height={1}
                alt=""
                src="/CL-2/arrow-581.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "203.5px",
                  left: "1103px",
                  maxHeight: "100%",
                  width: "259px",
                }}
                width={259}
                height={15}
                alt=""
                src="/CL-2/arrow-611.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "810px",
                left: "50px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1699px",
                height: "319px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "32px",
                  fontFamily: "Outfit",
                }}
                onClick={onSecTitleContainerClick3}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Domiciliary Care Agencies
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "69px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-54@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Registration
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "524px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-50@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Accreditation and Compliance
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "979px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-48@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Networking and Membership
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1434px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "73.6px",
                    position: "relative",
                    height: "73.6px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={74}
                  height={74}
                  alt=""
                  src="/CL-2/image-55@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Client Engagement
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "272px",
                  width: "214px",
                  height: "0.5px",
                  objectFit: "contain",
                }}
                width={214}
                height={1}
                alt=""
                src="/CL-2/arrow-581.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "769px",
                  maxHeight: "100%",
                  width: "174px",
                }}
                width={174}
                height={15}
                alt=""
                src="/CL-2/arrow-591.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1223px",
                  maxHeight: "100%",
                  width: "164px",
                }}
                width={164}
                height={15}
                alt=""
                src="/CL-2/arrow-61.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "1175px",
                left: "50px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1699px",
                height: "319px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "32px",
                  fontFamily: "Outfit",
                }}
                onClick={onSecTitleContainerClick4}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Home Care
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "69px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-195@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Certification
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "524px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-57@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Partnership with Agencies
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "979px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-58@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Service Offerings
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1434px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-59@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >{`Local Networking `}</Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "272px",
                  width: "214px",
                  height: "0.5px",
                  objectFit: "contain",
                }}
                width={214}
                height={1}
                alt=""
                src="/CL-2/arrow-581.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "769px",
                  maxHeight: "100%",
                  width: "174px",
                }}
                width={174}
                height={15}
                alt=""
                src="/CL-2/arrow-591.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1223px",
                  maxHeight: "100%",
                  width: "164px",
                }}
                width={164}
                height={15}
                alt=""
                src="/CL-2/arrow-61.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "1540px",
                left: "50px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1699px",
                height: "319px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  fontSize: "32px",
                  fontFamily: "Outfit",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={onCareProviderAllianceClick}
                >
                  Care Provider Alliance (CPA)
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "69px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-60@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Application
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "524px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-61@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Membership Criteria
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "979px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/image-62@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >{`Engagement `}</Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1434px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "88.2px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={88}
                  height={80}
                  alt=""
                  src="/CL-2/image-21@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Compliance and Benefits
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "272px",
                  width: "214px",
                  height: "0.5px",
                  objectFit: "contain",
                }}
                width={214}
                height={1}
                alt=""
                src="/CL-2/arrow-581.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "769px",
                  maxHeight: "100%",
                  width: "174px",
                }}
                width={174}
                height={15}
                alt=""
                src="/CL-2/arrow-591.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1223px",
                  maxHeight: "100%",
                  width: "164px",
                }}
                width={164}
                height={15}
                alt=""
                src="/CL-2/arrow-61.svg"
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Memberships
            </Box>
          </Box>
        </Box>
      </Box>
      {isColorLegendsKeyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeColorLegendsKey}
        >
          <ColorLegendsKey2 onClose={closeColorLegendsKey} />
        </PortalPopup>
      )}
    </>
  );
};

export default CareLibraryRequiredMemberships;
