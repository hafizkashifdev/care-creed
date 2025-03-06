import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCM: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      // Please sync "Care Library Required Affiliations" to the project
    }, []);

    const onImageClick = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-purpose-of-product-certification"
      );
    }, [router]);

    const onImageClick1 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-where-to-apply"
      );
    }, [router]);

    const onImageClick2 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-eligibility-criteria"
      );
    }, [router]);

    const onImageClick3 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-application-process"
      );
    }, [router]);

    const onImageClick4 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-required-documents"
      );
    }, [router]);

    const onImageClick5 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-cost-breakdown"
      );
    }, [router]);

    const onImageClick6 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-timeline-for-certification"
      );
    }, [router]);

    const onImageClick7 = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m-validity-of-the-certificate"
      );
    }, [router]);

    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "1188px",
          textAlign: "left",
          fontSize: "70px",
          color: "#0246bc",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "39px",
            left: "66px",
            width: "1688px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "46.4px",
          }}
        >
          <Image
            style={{
              width: "100px",
              position: "relative",
              height: "100px",
              overflow: "hidden",
              flexShrink: "0",
              cursor: "pointer",
            }}
            width={100}
            height={100}
            alt=""
            src="/CL-1/back-icon6.svg"
            onClick={onBackIconClick}
          />
          <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
            Institute of Health and Social Care Management (IHSCM)
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "285px",
            left: "66px",
            width: "1771px",
            height: "864px",
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "427px",
              height: "411px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={427}
            height={411}
            alt=""
            src="/CL-1/image-29578@2x.png"
            onClick={onImageClick}
          />
          <Image
            style={{
              position: "absolute",
              top: "0px",
              left: "447px",
              width: "427px",
              height: "411px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={427}
            height={411}
            alt=""
            src="/CL-1/image-29579@2x.png"
            onClick={onImageClick1}
          />
          <Image
            style={{
              position: "absolute",
              top: "0px",
              left: "894px",
              width: "427px",
              height: "412px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={427}
            height={412}
            alt=""
            src="/CL-1/image-295801@2x.png"
            onClick={onImageClick2}
          />
          <Image
            style={{
              position: "absolute",
              top: "0px",
              left: "1341px",
              width: "428px",
              height: "412px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={428}
            height={412}
            alt=""
            src="/CL-1/image-29581@2x.png"
            onClick={onImageClick3}
          />
          <Image
            style={{
              position: "absolute",
              top: "452px",
              left: "0px",
              width: "427px",
              height: "411px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={427}
            height={411}
            alt=""
            src="/CL-1/image-29582@2x.png"
            onClick={onImageClick4}
          />
          <Image
            style={{
              position: "absolute",
              top: "452px",
              left: "447px",
              width: "428px",
              height: "411px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={428}
            height={411}
            alt=""
            src="/CL-1/image-295851@2x.png"
            onClick={onImageClick5}
          />
          <Image
            style={{
              position: "absolute",
              top: "452px",
              left: "895px",
              width: "428px",
              height: "412px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={428}
            height={412}
            alt=""
            src="/CL-1/image-29591@2x.png"
            onClick={onImageClick6}
          />
          <Image
            style={{
              position: "absolute",
              top: "452px",
              left: "1343px",
              width: "427px",
              height: "412px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            width={427}
            height={412}
            alt=""
            src="/CL-1/image-29590@2x.png"
            onClick={onImageClick7}
          />
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCM;
