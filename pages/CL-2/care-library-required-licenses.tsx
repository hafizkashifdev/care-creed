import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

  const onCareQualityCommissionClick = useCallback(() => {
    // Please sync "Care Library Required Licenses Care Quality Commission (CQC)" to the project
  }, []);

  const onInformationCommissionersOffClick = useCallback(() => {
    // Please sync "Care Library Required Licenses Information Commissioner's Office (ICO)" to the project
  }, []);

  const onSecTitleContainerClick = useCallback(() => {
    // Please sync "Care Library Required Licenses GDPR" to the project
  }, []);

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "2321px",
          textAlign: "center",
          fontSize: "32px",
          color: "#707070",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "calc(50% - 905px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
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
            <Box sx={{ position: "relative", fontWeight: "600" }}>
              Required Licenses
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "167px",
            left: "38px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "1844px",
            height: "2116px",
            color: "#1c3f95",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-9px",
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
              License
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "53px",
              left: "32px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1783px",
              height: "911px",
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
              >
                National
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "124px",
                left: "62px",
                width: "1655px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "60px",
              }}
            >
              <Box
                sx={{
                  alignSelf: "stretch",
                  borderRadius: "12px",
                  borderWidth: "4px",
                  borderStyle: "dashed",
                  borderColor: "#1c3f95",
                  boxSizing: "border-box",
                  height: "354px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 16px 40px",
                }}
              >
                <Box
                  sx={{
                    width: "1591px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "80px",
                  }}
                >
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "12px 16px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        lineHeight: "40px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={onCareQualityCommissionClick}
                    >
                      Care Quality Commission (CQC)
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      fontSize: "16px",
                      fontFamily: "'Red Hat Text'",
                    }}
                  >
                    <Box
                      sx={{
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
                          width: "83.8px",
                          position: "relative",
                          height: "80px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={84}
                        height={80}
                        alt=""
                        src="/CL-2/image-16@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          sx={{ margin: 0 }}
                        >{`Determine `}</Typography>
                        <Typography
                          variant="inherit"
                          sx={{ margin: 0 }}
                        >{`Eligibility `}</Typography>
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          width: "85px",
                          position: "relative",
                          height: "80px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={85}
                        height={80}
                        alt=""
                        src="/CL-2/image-17@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          sx={{ margin: 0 }}
                        >{`Prepare for `}</Typography>
                        <Typography variant="inherit" sx={{ margin: 0 }}>
                          Registration
                        </Typography>
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                        src="/CL-2/image-18@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >{`Submit an Online Application `}</Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          width: "62.9px",
                          position: "relative",
                          height: "80px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={63}
                        height={80}
                        alt=""
                        src="/CL-2/image-19@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          sx={{ margin: 0 }}
                        >{`Pay the `}</Typography>
                        <Typography variant="inherit" sx={{ margin: 0 }}>
                          Registration Fee
                        </Typography>
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          width: "87.9px",
                          position: "relative",
                          height: "80px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={88}
                        height={80}
                        alt=""
                        src="/CL-2/image-20@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >{`CQC Assessment and Inspection `}</Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                        src="/CL-2/image-12@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Receive Registration Certificate
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                        src="/CL-2/image-211@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Ongoing Compliance
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  alignSelf: "stretch",
                  borderRadius: "12px",
                  borderWidth: "4px",
                  borderStyle: "dashed",
                  borderColor: "#1c3f95",
                  boxSizing: "border-box",
                  height: "328px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 16px 40px",
                }}
              >
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "80px",
                  }}
                >
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "12px 16px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        lineHeight: "40px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={onInformationCommissionersOffClick}
                    >
                      Information Commissioner's Office (ICO)
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      fontSize: "16px",
                      fontFamily: "'Red Hat Text'",
                    }}
                  >
                    <Box
                      sx={{
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
                        src="/CL-2/image-22@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          sx={{ margin: 0 }}
                        >{`Determine the `}</Typography>
                        <Typography variant="inherit" sx={{ margin: 0 }}>
                          Need for Registration
                        </Typography>
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          width: "62.9px",
                          position: "relative",
                          height: "80px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={63}
                        height={80}
                        alt=""
                        src="/CL-2/image-19@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        {" "}
                        Identify the Appropriate Fee Tier
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                        src="/CL-2/image-24@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Prepare Required Information
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                        src="/CL-2/image-25@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Complete the Registration Form
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          width: "65.5px",
                          position: "relative",
                          height: "80px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={66}
                        height={80}
                        alt=""
                        src="/CL-2/image-191@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Pay the Registration Fee
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                        src="/CL-2/image-12@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Receive Confirmation and Certificate
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "56px",
                        position: "relative",
                        borderRadius: "20px",
                        maxHeight: "100%",
                        marginLeft: "-10px",
                      }}
                      width={56}
                      height={22}
                      alt=""
                      src="/CL-2/wdgt--section.svg"
                    />
                    <Box
                      sx={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                        margin: "-10px",
                        position: "relative",
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
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Maintain Ongoing Compliance
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1000px",
              left: "32px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1783px",
              height: "1049px",
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
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1095px",
              left: "94px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1674px",
              height: "893px",
              fontSize: "14.9px",
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
                GDPR Compliance
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "29px",
                width: "977.4px",
                height: "227.6px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "64.1px",
                  left: "0px",
                  width: "185.8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14.9px",
                }}
              >
                <Image
                  style={{
                    width: "74.3px",
                    position: "relative",
                    height: "74.3px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={74}
                  height={74}
                  alt=""
                  src="/CL-2/rectangle@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Compliance Flow
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "114.3px",
                  left: "185.8px",
                  borderRadius: "18.6px",
                  maxHeight: "100%",
                  width: "178.4px",
                }}
                width={178}
                height={21}
                alt=""
                src="/CL-2/wdgt--section1.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "427.4px",
                  borderRadius: "11.1px",
                  borderWidth: "3.7px",
                  borderStyle: "dashed",
                  borderColor: "#1c3f95",
                  boxSizing: "border-box",
                  width: "550px",
                  height: "227.6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "37.2px 14.9px",
                }}
              >
                <Box
                  sx={{
                    width: "524px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "74.3px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={74}
                        alt=""
                        src="/CL-2/image-221@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          sx={{ margin: 0 }}
                        >{`Determine the `}</Typography>
                        <Typography variant="inherit" sx={{ margin: 0 }}>
                          Need for Registration
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "58.5px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={59}
                        height={74}
                        alt=""
                        src="/CL-2/image-23@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        {" "}
                        Identify the Appropriate Fee Tier
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "385.4px",
                left: "305.9px",
                borderRadius: "11.1px",
                borderWidth: "3.7px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1335.1px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "37.2px 14.9px",
              }}
            >
              <Box
                sx={{
                  width: "1310px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "1315.6px",
                    position: "relative",
                    height: "382.8px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "1315.6px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "22.3px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "65px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={65}
                        alt=""
                        src="/CL-2/rectangle1@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Gap Analysis
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section2.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "48.5px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={49}
                        alt=""
                        src="/CL-2/rectangle2@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Implementation
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section3.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={74}
                        alt=""
                        src="/CL-2/rectangle3@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Internal Audit
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section4.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={74}
                        alt=""
                        src="/CL-2/rectangle4@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Management Review
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section5.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "75px",
                          position: "relative",
                          maxHeight: "100%",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={75}
                        height={57}
                        alt=""
                        src="/CL-2/image-29335@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Corrective Actions 
                      </Box>
                    </Box>
                  </Box>
                  <Image
                    style={{
                      position: "absolute",
                      top: "133.8px",
                      left: "1213.4px",
                      borderRadius: "18.6px",
                      width: "0px",
                      height: "80.8px",
                      objectFit: "contain",
                    }}
                    width={1}
                    height={81}
                    alt=""
                    src="/CL-2/wdgt--section6.svg"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "239.7px",
                      left: "0px",
                      width: "1315.6px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "22.3px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={74}
                        alt=""
                        src="/CL-2/rectangle5@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Certification  Decision
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section7.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "75px",
                          position: "relative",
                          maxHeight: "100%",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={75}
                        height={90}
                        alt=""
                        src="/CL-2/image-29337@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Stage 2 Audit (on-site Assessment)
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section8.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.5px",
                          position: "relative",
                          maxHeight: "100%",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={75}
                        height={66}
                        alt=""
                        src="/CL-2/image-29336@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Stage 1 Audit (Document Review)
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section9.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={74}
                        alt=""
                        src="/CL-2/rectangle6@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Certification  Body Selection
                      </Box>
                    </Box>
                    <Image
                      style={{
                        width: "52px",
                        position: "relative",
                        borderRadius: "18.6px",
                        maxHeight: "100%",
                      }}
                      width={52}
                      height={21}
                      alt=""
                      src="/CL-2/wdgt--section10.svg"
                    />
                    <Box
                      sx={{
                        width: "185.8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "14.9px",
                      }}
                    >
                      <Image
                        style={{
                          width: "74.3px",
                          position: "relative",
                          height: "74.3px",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        width={74}
                        height={74}
                        alt=""
                        src="/CL-2/rectangle7@2x.png"
                      />
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontWeight: "500",
                          zIndex: "0",
                        }}
                      >
                        Pre-Certification Audit
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "574px",
                left: "29px",
                width: "185.8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "14.9px",
              }}
            >
              <Image
                style={{
                  width: "74.3px",
                  position: "relative",
                  height: "74.3px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={74}
                height={74}
                alt=""
                src="/CL-2/rectangle8@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Compliance Flow
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "623.7px",
                left: "214.8px",
                borderRadius: "18.6px",
                maxHeight: "100%",
                width: "52px",
              }}
              width={52}
              height={21}
              alt=""
              src="/CL-2/wdgt--section11.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "332px",
                left: "711px",
                maxWidth: "100%",
                overflow: "hidden",
                height: "52px",
                objectFit: "contain",
              }}
              width={15}
              height={52}
              alt=""
              src="/CL-2/arrow-62.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "100px",
            left: "1546px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
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
              <Box sx={{ position: "relative", fontWeight: "600" }}>
                Color Legends (Key)
              </Box>
            </Box>
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

export default CareLibraryRequiredLicenses;
