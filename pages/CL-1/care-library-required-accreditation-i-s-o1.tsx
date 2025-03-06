import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO1: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    // Please sync "Care Library Required Accreditations" to the project
  }, []);

  const onImageClick = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-purpose-of-product-certification"
    );
  }, [router]);

  const onImageClick1 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-where-to-apply"
    );
  }, [router]);

  const onImageClick2 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-eligibility-criteria"
    );
  }, [router]);

  const onImageClick3 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-application-process"
    );
  }, [router]);

  const onImageClick4 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-required-documents"
    );
  }, [router]);

  const onImageClick5 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-cost-breakdown"
    );
  }, [router]);

  const onImageClick6 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-timeline-for-certification"
    );
  }, [router]);

  const onImageClick7 = useCallback(() => {
    router.push(
      "/care-library-required-accreditation-i-s-o27001-validity-of-the-certificate"
    );
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1122px",
        textAlign: "left",
        fontSize: "92.8px",
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
            width: "112px",
            position: "relative",
            height: "112px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={112}
          height={112}
          alt=""
          src="/CL-1/back-icon4.svg"
          onClick={onBackIconClick}
        />
        <Box
          sx={{
            flex: 1,
            position: "relative",
            fontWeight: "600",
            whiteSpace: "pre-wrap",
          }}
        >
          ISO 27001
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "195px",
          left: "66px",
          width: "1771px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          gap: "40px 20px",
        }}
      >
        <Image
          style={{
            width: "426px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={386}
          alt=""
          src="/CL-1/image-29564@2x.png"
          onClick={onImageClick}
        />
        <Image
          style={{
            width: "426px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={386}
          alt=""
          src="/CL-1/image-29566@2x.png"
          onClick={onImageClick1}
        />
        <Image
          style={{
            width: "426px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={387}
          alt=""
          src="/CL-1/image-29567@2x.png"
          onClick={onImageClick2}
        />
        <Image
          style={{
            width: "427px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={387}
          alt=""
          src="/CL-1/image-29568@2x.png"
          onClick={onImageClick3}
        />
        <Image
          style={{
            width: "426px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={386}
          alt=""
          src="/CL-1/image-29569@2x.png"
          onClick={onImageClick4}
        />
        <Image
          style={{
            width: "427px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={386}
          alt=""
          src="/CL-1/image-29570@2x.png"
          onClick={onImageClick5}
        />
        <Image
          style={{
            width: "427px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={387}
          alt=""
          src="/CL-1/image-29571@2x.png"
          onClick={onImageClick6}
        />
        <Image
          style={{
            width: "426px",
            position: "relative",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={387}
          alt=""
          src="/CL-1/image-29572@2x.png"
          onClick={onImageClick7}
        />
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAccreditationISO1;
