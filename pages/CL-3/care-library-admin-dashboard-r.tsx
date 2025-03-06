import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryAdminDashboardR: NextPage = () => {
  const router = useRouter();

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-3/care-library-product-features");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "5px",
        backgroundColor: "#fff",
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "#4e132c",
        boxSizing: "border-box",
        height: "2205px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "42px",
        color: "#232f3e",
        fontFamily: "Outfit",
      }}
    >
      <Image
        style={{
          position: "absolute",
          height: "26.49%",
          width: "68.96%",
          top: "36.73%",
          right: "15.54%",
          bottom: "36.78%",
          left: "15.49%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={1324}
        height={584}
        alt=""
        src="/CL-3/group-191.svg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "1009px",
          left: "calc(50% - 860px)",
          width: "1720px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "30px",
        }}
      >
        <Typography
          variant="inherit"
          component="b"
          sx={{ alignSelf: "stretch", position: "relative", fontWeight: "700" }}
        >
          Mockup
        </Typography>
        <Image
          style={{
            width: "1720px",
            position: "relative",
            height: "964.5px",
            objectFit: "cover",
          }}
          width={1720}
          height={965}
          alt=""
          src="/CL-3/image-29208@2x.png"
        />
      </Box>
      <Image
        style={{
          position: "absolute",
          top: "35px",
          left: "47px",
          width: "48px",
          height: "48px",
          cursor: "pointer",
        }}
        width={48}
        height={48}
        alt=""
        src="/CL-3/iconslineararrowleft1.svg"
        onClick={onIconslineararrowLeftClick}
      />
      <Image
        style={{
          position: "absolute",
          height: "5.06%",
          width: "11.27%",
          top: "1.13%",
          right: "45.03%",
          bottom: "93.8%",
          left: "43.7%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={216}
        height={112}
        alt=""
        src="/CL-3/group-583.svg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "168px",
          left: "calc(50% - 696px)",
          width: "1371px",
          height: "234px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "calc(50% - 685.5px)",
            width: "1371px",
            height: "234px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "42px",
          }}
        >
          <Typography
            variant="inherit"
            component="b"
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontWeight: "700",
            }}
          >
            2.1.7 Recruitment
          </Typography>
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "24px",
              lineHeight: "34px",
              color: "#3d4e62",
            }}
          >{`This widget manages the recruitment process, from job postings to candidate selection, ensuring efficient hiring procedures. Recruitment widget displays pie chart for registrations weekly/monthly, and active staff. `}</Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "500px",
          left: "75px",
          boxShadow: 1,
          borderRadius: "16px",
          backgroundColor: "#fff",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#ee2e7e",
          boxSizing: "border-box",
          width: "835px",
          height: "450px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "500px",
          left: "1010px",
          boxShadow: 1,
          borderRadius: "16px",
          backgroundColor: "#d9d9d9",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#65cdf0",
          boxSizing: "border-box",
          width: "835px",
          height: "450px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "629.1px",
          left: "194.1px",
          borderRadius: "5.7px",
          backgroundColor: "#fff",
          borderWidth: "1.9px",
          borderStyle: "dashed",
          borderColor: "#00843d",
          boxSizing: "border-box",
          width: "705.9px",
          height: "191.6px",
          fontSize: "8.5px",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "calc(100% - 40.7px)",
            width: "calc(100% - 83.7px)",
            top: "0px",
            right: "83.7px",
            bottom: "40.7px",
            left: "0px",
            display: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "calc(100% + 1.9px)",
              width: "calc(100% + 1.9px)",
              top: "-0.9px",
              right: "-1px",
              bottom: "-1px",
              left: "-0.9px",
              borderWidth: "1.9px",
              borderStyle: "dashed",
              borderColor: "#5b6470",
              boxSizing: "border-box",
            }}
          />
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
            padding: "5.7px 7.6px",
            gap: "4.7px",
          }}
        >
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#232f3e",
              display: "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              1
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              fontSize: "15.1px",
              lineHeight: "18.9px",
              fontWeight: "600",
              fontFamily: "Outfit",
              color: "#00843d",
            }}
          >
            Dashboard Widgets
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "46.4px",
            left: "17.5px",
            width: "94.6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.1
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              display: "inline-block",
              height: "7.1px",
              flexShrink: "0",
              zIndex: "0",
            }}
          >
            Manage Shifts
          </Box>
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "58.7px",
            left: "263.1px",
            borderRadius: "1.9px",
            width: "16.1px",
            height: "16.6px",
          }}
          width={16}
          height={17}
          alt=""
          src="/CL-3/.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "58.2px",
            left: "114.5px",
            borderRadius: "1.9px",
            width: "16.1px",
            height: "16.6px",
          }}
          width={16}
          height={17}
          alt=""
          src="/CL-3/1.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "130.6px",
            left: "118.8px",
            borderRadius: "1.9px",
            width: "13.8px",
            height: "14.2px",
          }}
          width={14}
          height={14}
          alt=""
          src="/CL-3/2.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "131px",
            left: "260px",
            borderRadius: "1.9px",
            width: "13.8px",
            height: "14.2px",
          }}
          width={14}
          height={14}
          alt=""
          src="/CL-3/3.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "132px",
            left: "394.1px",
            borderRadius: "1.9px",
            width: "13.8px",
            height: "14.2px",
          }}
          width={14}
          height={14}
          alt=""
          src="/CL-3/4.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "130.1px",
            left: "537.5px",
            borderRadius: "1.9px",
            width: "13.8px",
            height: "14.2px",
          }}
          width={14}
          height={14}
          alt=""
          src="/CL-3/5.svg"
        />
        <Box
          sx={{
            position: "absolute",
            top: "48.3px",
            left: "164.2px",
            width: "103.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.2
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/images-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Invoice
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "44.5px",
            left: "312.7px",
            width: "103.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.3
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/icon@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Time sheet
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "43.5px",
            left: "461.3px",
            width: "103.6px",
            height: "53.5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.4
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Shift Comprehension
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "38.3px",
            left: "610.3px",
            width: "103.6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.5
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle2@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Today's Birthday
          </Box>
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "57.7px",
            left: "415.9px",
            borderRadius: "1.9px",
            width: "16.1px",
            height: "16.6px",
          }}
          width={16}
          height={17}
          alt=""
          src="/CL-3/6.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "55.8px",
            left: "572px",
            borderRadius: "1.9px",
            width: "16.1px",
            height: "16.6px",
          }}
          width={16}
          height={17}
          alt=""
          src="/CL-3/7.svg"
        />
        <Box
          sx={{
            position: "absolute",
            top: "116.4px",
            left: "436.2px",
            width: "96.5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "66.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.9
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle3@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Client
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "114px",
            left: "581.5px",
            width: "106px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.10
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle4@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Staff status
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "115px",
            left: "301.9px",
            width: "85.6px",
            height: "51.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "60.5px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.8
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle5@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Staff
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "115px",
            left: "167px",
            width: "85.6px",
            height: "51.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "60.5px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.7
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle6@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Recruitment
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "118.8px",
            left: "15.6px",
            width: "103.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7.6px",
            opacity: "0.3",
          }}
        >
          <Box
            sx={{
              margin: "0 !important",
              position: "absolute",
              top: "0px",
              right: "74.7px",
              boxShadow: 1,
              borderRadius: "15.6px",
              backgroundColor: "#456cea",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4.7px",
              zIndex: "2",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                position: "relative",
                display: "inline-block",
                minWidth: "10.41px",
                fontWeight: "700",
              }}
            >
              2.1.6
            </Typography>
          </Box>
          <Image
            style={{
              width: "37.9px",
              position: "relative",
              height: "37.9px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={38}
            height={38}
            alt=""
            src="/CL-3/rectangle7@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "5.7px",
              color: "#00843d",
              zIndex: "0",
            }}
          >
            Top Candidates
          </Box>
        </Box>
      </Box>
      <Image
        style={{
          position: "absolute",
          top: "716px",
          left: "154px",
          maxHeight: "100%",
          width: "35.5px",
        }}
        width={36}
        height={7}
        alt=""
        src="/CL-3/arrow-1.svg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "694px",
          left: "79px",
          width: "94.6px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "7.6px",
          opacity: "0.3",
          fontSize: "8.5px",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            margin: "0 !important",
            position: "absolute",
            top: "0px",
            right: "74.7px",
            boxShadow: 1,
            borderRadius: "15.6px",
            backgroundColor: "#456cea",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "4.7px",
            zIndex: "2",
          }}
        >
          <Typography
            variant="inherit"
            component="b"
            sx={{
              position: "relative",
              display: "inline-block",
              minWidth: "10.41px",
              fontWeight: "700",
            }}
          >
            2.1
          </Typography>
        </Box>
        <Image
          style={{
            width: "37.9px",
            position: "relative",
            height: "37.9px",
            objectFit: "cover",
            zIndex: "1",
          }}
          width={38}
          height={38}
          alt=""
          src="/CL-3/rectangle8@2x.png"
        />
        <Box
          sx={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "5.7px",
            color: "#00843d",
            display: "inline-block",
            height: "7.1px",
            flexShrink: "0",
            zIndex: "0",
          }}
        >
          Dashboard
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryAdminDashboardR;
