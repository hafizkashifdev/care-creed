import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliat: NextPage = () => {
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
    // Please sync "Care Library Required Affiliation National Care Association (NCA)" to the project
  }, []);

  const onSecTitleContainerClick1 = useCallback(() => {
    // Please sync "Care Library Required Affiliation National Health Service (NHS)" to the project
  }, []);

  const onSecTitleContainerClick2 = useCallback(() => {
    // Please sync "Care Library Required Affiliation Institute of Health and Social Care Management (IHSCM)" to the project
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "1609px",
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
            left: "calc(50% - 920px)",
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
              Required Affiliations
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
            height: "1353px",
            fontSize: "16px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
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
              height: "1213px",
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
                onClick={onSecTitleContainerClick}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  National Care Association (NCA)
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
                  src="/CL-2/image-63@2x.png"
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
                  Research and Understand
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "423px",
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
                  left: "757px",
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
                  src="/CL-2/image-64@2x.png"
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
                  Submit Documentation
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1091px",
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
                  src="/CL-2/image-65@2x.png"
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
                  Review and Approval
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
                  src="/CL-2/image-66@2x.png"
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
                  Membership Benefits
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "201.5px",
                  left: "272px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-58.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "615px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "957px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1291px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
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
                onClick={onSecTitleContainerClick1}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  National Health Service (NHS)
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
                  src="/CL-2/image-71@2x.png"
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
                  Identify Relevant NHS Body
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "423px",
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
                  src="/CL-2/image-72@2x.png"
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
                  Application for Services or Contracts
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "757px",
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
                  Bid for Contracts
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1091px",
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
                  src="/CL-2/image-74@2x.png"
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
                  Bid for Contracts
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
                  Collaboration and Networking
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "201.5px",
                  left: "272px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-58.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "615px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "957px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1291px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
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
                onClick={onSecTitleContainerClick2}
              >
                <Box
                  sx={{
                    position: "relative",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Institute of Health and Social Care Management (IHSCM)
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
                  src="/CL-2/image-63@2x.png"
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
                  Research Membership Options
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "423px",
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
                  src="/CL-2/image-68@2x.png"
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
                  Application Process
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "757px",
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
                  src="/CL-2/image-75@2x.png"
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
                  Provide Documentation
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "138px",
                  left: "1091px",
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
                  src="/CL-2/image-76@2x.png"
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
                  Membership Review
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
                  src="/CL-2/image-77@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >{`Access Benefits `}</Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "201.5px",
                  left: "272px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-58.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "615px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "957px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "202px",
                  left: "1291px",
                  maxHeight: "100%",
                  width: "96px",
                }}
                width={96}
                height={15}
                alt=""
                src="/CL-2/arrow-59.svg"
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
            >
              Affiliations
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

export default CareLibraryRequiredAffiliat;
