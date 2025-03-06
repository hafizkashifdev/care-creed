import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryExistingFeatures: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftIconClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/CL-2/care-library-product-feature");
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1638px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "30px",
        boxSizing: "border-box",
        textAlign: "center",
        fontSize: "24px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "24px 10px",
          gap: "10px",
        }}
      >
        <Image
          style={{
            width: "36px",
            position: "relative",
            height: "36px",
            cursor: "pointer",
          }}
          width={36}
          height={36}
          alt=""
          src="/CL-2/vuesaxboldarrowsquareleft.svg"
          onClick={onVuesaxboldarrowSquareLeftIconClick}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Care Library Existing Features
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          position: "relative",
          borderRadius: "8px",
          borderWidth: "3px",
          borderStyle: "dashed",
          borderColor: "#0246bc",
          boxSizing: "border-box",
          height: "1494px",
          color: "#000",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "32px",
            left: "24px",
            width: "1812px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Dashboard
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Client Manger
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Onboarding
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Staff Manager
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "275px",
            left: "24px",
            width: "1812px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Staff Allocation
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Staff Booking
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Book Calendar
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Shift Manger
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "518px",
            left: "24px",
            width: "1812px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Unpublish Shift
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Finance
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Reports
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Seetings
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "761px",
            left: "24px",
            width: "1812px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Help
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Profile
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Shift Details
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              My Calendar
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1004px",
            left: "24px",
            width: "1812px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Traning
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Rating
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Manage Shifts
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              User Management
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1247px",
            left: "24px",
            width: "1812px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Preferences
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Manage Courses
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Trainee Info
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "212px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Webinar
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryExistingFeatures;
