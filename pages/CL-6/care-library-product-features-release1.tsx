import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey from "../../components/CL-2/CL-6/color-legends-key";
import PortalPopup from "../../components/CL-2/CL-6/portal-popup";
import { useRouter } from "next/router";

const CareLibraryProductFeaturesRelease1: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

  const onBackBtnContainerClick = useCallback(() => {
    // Please sync "Care Library Existing Features" to the project
  }, []);

  const onWdgtContainerClick = useCallback(() => {
    // Please sync "1. Care Library KYC & KYB" to the project
  }, []);

  const onWdgtContainerClick1 = useCallback(() => {
    // Please sync "2.7.1 Care Library Admin Staff Booking Available Shifts" to the project
  }, []);

  const onWdgtContainerClick2 = useCallback(() => {
    // Please sync "2.7.3 Care Library Admin Staff Booking Completed Shifts" to the project
  }, []);

  const onWdgtContainerClick3 = useCallback(() => {
    // Please sync "2.7.2 Care Library Admin Staff Booking Upcoming Shifts" to the project
  }, []);

  const onWdgtContainerClick4 = useCallback(() => {
    // Please sync "2.7.4 Care Library Admin Staff Booking Work History" to the project
  }, []);

  const onSecTitleContainerClick = useCallback(() => {
    // Please sync "2. Care Library Admin" to the project
  }, []);

  const onWdgtContainerClick5 = useCallback(() => {
    // Please sync "2.1 Care Library Admin Dashboard" to the project
  }, []);

  const onWdgtContainerClick6 = useCallback(() => {
    // Please sync "2.2 Care Library Admin Client Manager" to the project
  }, []);

  const onWdgtContainerClick7 = useCallback(() => {
    // Please sync "2.6 Care Library Admin Staff Allocation" to the project
  }, []);

  const onWdgtContainerClick8 = useCallback(() => {
    // Please sync "2.2.1 Care Library Admin Client Manager Add Client" to the project
  }, []);

  const onWdgtContainerClick9 = useCallback(() => {
    // Please sync "2.6.1 Care Library Admin Staff Allocation Allocate Carer" to the project
  }, []);

  const onWdgtContainerClick10 = useCallback(() => {
    // Please sync "2.3 Care Library Admin Onboarding" to the project
  }, []);

  const onWdgtContainerClick11 = useCallback(() => {
    // Please sync "2.4 Care Library Admin Staff Manager" to the project
  }, []);

  const onWdgtContainerClick12 = useCallback(() => {
    // Please sync "2.5 Care Library Admin Shift Manager" to the project
  }, []);

  const onWdgtContainerClick13 = useCallback(() => {
    // Please sync "2.7 Care Library Admin Staff Booking" to the project
  }, []);

  const onWdgtContainerClick14 = useCallback(() => {
    // Please sync "2.10 Care Library Admin Reports" to the project
  }, []);

  const onWdgtContainerClick15 = useCallback(() => {
    // Please sync "2.11 Care Library Admin Finance" to the project
  }, []);

  const onWdgtContainerClick16 = useCallback(() => {
    // Please sync "2.9 Care Library Admin Unpublished shift" to the project
  }, []);

  const onWdgtContainerClick17 = useCallback(() => {
    // Please sync "2.8 Care Library Admin Booking Calendar" to the project
  }, []);

  const onWdgtContainerClick18 = useCallback(() => {
    // Please sync "2.1.1 Care Library Admin Dashboard Manage Shifts" to the project
  }, []);

  const onWdgtContainerClick19 = useCallback(() => {
    // Please sync "2.1.2 Care Library Admin  Dashboard  Invoice" to the project
  }, []);

  const onWdgtContainerClick20 = useCallback(() => {
    // Please sync "2.1.3 Care Library Admin  Dashboard Time Sheet" to the project
  }, []);

  const onWdgtContainerClick21 = useCallback(() => {
    // Please sync "2.1.4 Care Library Admin  Dashboard Shift Comprehension" to the project
  }, []);

  const onWdgtContainerClick22 = useCallback(() => {
    // Please sync "2.1.5 Care Library Admin  Dashboard Today’s Birthday" to the project
  }, []);

  const onWdgtContainerClick23 = useCallback(() => {
    // Please sync "2.1.9 Care Library Admin  Dashboard Client" to the project
  }, []);

  const onWdgtContainerClick24 = useCallback(() => {
    // Please sync "2.1.10 Care Library Admin Dashboard Staff Status" to the project
  }, []);

  const onWdgtContainerClick25 = useCallback(() => {
    // Please sync "2.1.8 Care Library Admin  Dashboard Staff" to the project
  }, []);

  const onWdgtContainerClick26 = useCallback(() => {
    // Please sync "2.1.7 Care Library Admin Dashboard Recruitment" to the project
  }, []);

  const onWdgtContainerClick27 = useCallback(() => {
    // Please sync "2.1.6 Care Library Admin  Dashboard Top Candidate" to the project
  }, []);

  const onWdgtContainerClick28 = useCallback(() => {
    // Please sync "2.4.1 Care Library Admin Staff Manager View Profile" to the project
  }, []);

  const onWdgtContainerClick29 = useCallback(() => {
    // Please sync "2.4.4 Care Library Admin Staff Manager Send/Resend Invitation" to the project
  }, []);

  const onWdgtContainerClick30 = useCallback(() => {
    // Please sync "2.4.2 Care Library Admin Staff Manager Staff Summary" to the project
  }, []);

  const onWdgtContainerClick31 = useCallback(() => {
    // Please sync "2.4.5 Care Library Admin Staff Manager Allocate Staff" to the project
  }, []);

  const onWdgtContainerClick32 = useCallback(() => {
    // Please sync "2.4.3 Care Library Admin Staff Manager Send Email" to the project
  }, []);

  const onWdgtContainerClick33 = useCallback(() => {
    // Please sync "2.4.6 Care Library Admin Staff Manager Delete" to the project
  }, []);

  const onWdgtContainerClick34 = useCallback(() => {
    // Please sync "2.5.1 Care Library Admin Shift Manager Shift Request" to the project
  }, []);

  const onWdgtContainerClick35 = useCallback(() => {
    // Please sync "2.5.4 Care Library Admin Shift Manager Confirmed Shift " to the project
  }, []);

  const onWdgtContainerClick36 = useCallback(() => {
    // Please sync "2.5.2 Care Library Admin Shift Manager Post New Shift " to the project
  }, []);

  const onWdgtContainerClick37 = useCallback(() => {
    // Please sync "2.5.5 Care Library Admin Shift Manager Unfilled Shifts  " to the project
  }, []);

  const onWdgtContainerClick38 = useCallback(() => {
    // Please sync "2.5.3 Care Library Admin Shift Manager Book Staff Direct" to the project
  }, []);

  const onWdgtContainerClick39 = useCallback(() => {
    // Please sync "2.5.6 Care Library Admin Shift Manager Shifts Calendar" to the project
  }, []);

  const onWdgtContainerClick40 = useCallback(() => {
    // Please sync "2.9.1 Care Library Admin Unpublished shift Post New shift" to the project
  }, []);

  const onWdgtContainerClick41 = useCallback(() => {
    // Please sync "2.9.3 Care Library Admin Unpublished shift Delete Shift" to the project
  }, []);

  const onWdgtContainerClick42 = useCallback(() => {
    // Please sync "2.9.2 Care Library Admin Unpublished shift Book Staff Direct" to the project
  }, []);

  const onWdgtContainerClick43 = useCallback(() => {
    // Please sync "2.8.1 Care Library Admin Booking Calendar Time Sheet" to the project
  }, []);

  const onWdgtContainerClick44 = useCallback(() => {
    // Please sync "2.8.2 Care Library Admin Booking Calendar Time and Attendance" to the project
  }, []);

  const onWdgtContainerClick45 = useCallback(() => {
    // Please sync "2.11.1 Care Library Admin Finance Dashboard" to the project
  }, []);

  const onWdgtContainerClick46 = useCallback(() => {
    // Please sync "2.11.2 Care Library Admin Finance Setup" to the project
  }, []);

  const onWdgtContainerClick47 = useCallback(() => {
    // Please sync "2.11.1.1 Care Library Admin Finance Dashboard Account Receivable" to the project
  }, []);

  const onWdgtContainerClick48 = useCallback(() => {
    // Please sync "2.11.1.3 Care Library Admin Finance Dashboard Clients Wise Average Profit" to the project
  }, []);

  const onWdgtContainerClick49 = useCallback(() => {
    // Please sync "2.11.1.5 Care Library Admin Finance Dashboard  Week Wise Shift Hours Summary" to the project
  }, []);

  const onWdgtContainerClick50 = useCallback(() => {
    // Please sync "2.11.1.7 Care Library Admin Finance Dashboard Top Clients" to the project
  }, []);

  const onWdgtContainerClick51 = useCallback(() => {
    // Please sync "2.11.1.6 Care Library Admin Finance Dashboard Amount Receivable" to the project
  }, []);

  const onWdgtContainerClick52 = useCallback(() => {
    // Please sync "2.11.1.8 Care Library Admin Finance Dashboard Weekwise Clients Profit" to the project
  }, []);

  const onWdgtContainerClick53 = useCallback(() => {
    // Please sync "2.11.1.2 Care Library Admin Finance Dashboard Revenue Comparison" to the project
  }, []);

  const onWdgtContainerClick54 = useCallback(() => {
    // Please sync "2.11.1.4 Care Library Admin Finance Dashboard Staff Categories" to the project
  }, []);

  const onWdgtContainerClick55 = useCallback(() => {
    // Please sync "2.11.3 Care Library Admin Finance Invoice" to the project
  }, []);

  const onWdgtContainerClick56 = useCallback(() => {
    // Please sync "2.11.5 Care Library Admin Finance Client Payment Details" to the project
  }, []);

  const onWdgtContainerClick57 = useCallback(() => {
    // Please sync "2.11.6 Care Library Admin Finance Reports" to the project
  }, []);

  const onWdgtContainerClick58 = useCallback(() => {
    // Please sync "2.11.4 Care Library Admin Finance Staff Payment Details" to the project
  }, []);

  const onWdgtContainerClick59 = useCallback(() => {
    // Please sync "2.11.2.1 Care Library Admin Finance Setup Client Rate Setup" to the project
  }, []);

  const onWdgtContainerClick60 = useCallback(() => {
    // Please sync "2.11.2.3 Care Library Admin Finance Setup Staff Code Setup" to the project
  }, []);

  const onWdgtContainerClick61 = useCallback(() => {
    // Please sync "2.11.2.2 Care Library Admin Finance Setup Staff Rate Setup" to the project
  }, []);

  const onSecTitleContainerClick1 = useCallback(() => {
    // Please sync " 4. Care Library Care Coordinator" to the project
  }, []);

  const onWdgtContainerClick62 = useCallback(() => {
    // Please sync "4.1 Care Library Care Coordinator Dashboard" to the project
  }, []);

  const onWdgtContainerClick63 = useCallback(() => {
    // Please sync "4.2 Care Library Care Coordinator Manage Shifts " to the project
  }, []);

  const onWdgtContainerClick64 = useCallback(() => {
    // Please sync "4.5 Care Library Care Coordinator Staff Allocation" to the project
  }, []);

  const onWdgtContainerClick65 = useCallback(() => {
    // Please sync "4.6 Care Library Care Coordinator Finance" to the project
  }, []);

  const onWdgtContainerClick66 = useCallback(() => {
    // Please sync "4.7 Care Library Care Coordinator Training" to the project
  }, []);

  const onWdgtContainerClick67 = useCallback(() => {
    // Please sync "4.8 Care Library Care Coordinator Reports" to the project
  }, []);

  const onWdgtContainerClick68 = useCallback(() => {
    // Please sync "4.1.1 Care Library Care Coordinator Dashboard Shift Requests" to the project
  }, []);

  const onWdgtContainerClick69 = useCallback(() => {
    // Please sync "4.1.2 Care Library Care Coordinator Dashboard Shift Bookings" to the project
  }, []);

  const onWdgtContainerClick70 = useCallback(() => {
    // Please sync "4.1.3 Care Library Care Coordinator Dashboard Whistle Blowing" to the project
  }, []);

  const onWdgtContainerClick71 = useCallback(() => {
    // Please sync "4.1.4 Care Library Care Coordinator Dashboard Shift Insight" to the project
  }, []);

  const onWdgtContainerClick72 = useCallback(() => {
    // Please sync "4.1.8 Care Library Care Coordinator Dashboard Shift Request by Care Homes" to the project
  }, []);

  const onWdgtContainerClick73 = useCallback(() => {
    // Please sync "4.1.7 Care Library Care Coordinator Dashboard Calendar" to the project
  }, []);

  const onWdgtContainerClick74 = useCallback(() => {
    // Please sync "4.1.6 Care Library Care Coordinator Dashboard Top Rated Carers" to the project
  }, []);

  const onWdgtContainerClick75 = useCallback(() => {
    // Please sync "4.1.5 Care Library Care Coordinator Dashboard Carers Status" to the project
  }, []);

  const onWdgtContainerClick76 = useCallback(() => {
    // Please sync "4.2.1 Care Library Care Coordinator Manage Shifts Shift Request " to the project
  }, []);

  const onWdgtContainerClick77 = useCallback(() => {
    // Please sync "4.2.2 Care Library Care Coordinator Manage Shifts Post New Shift  " to the project
  }, []);

  const onWdgtContainerClick78 = useCallback(() => {
    // Please sync "4.2.3 Care Library Care Coordinator Manage Shifts Book Staff Direct  " to the project
  }, []);

  const onWdgtContainerClick79 = useCallback(() => {
    // Please sync "4.2.6 Care Library Care Coordinator Manage Shifts Shift Calendar   " to the project
  }, []);

  const onWdgtContainerClick80 = useCallback(() => {
    // Please sync "4.2.5 Care Library Care Coordinator Manage Shifts Unfilled Shifts   " to the project
  }, []);

  const onWdgtContainerClick81 = useCallback(() => {
    // Please sync "4.2.4 Care Library Care Coordinator Manage Shifts Confirmed Shift   " to the project
  }, []);

  const onWdgtContainerClick82 = useCallback(() => {
    // Please sync "4.3 Care Library Care Coordinator Booking Calendar" to the project
  }, []);

  const onWdgtContainerClick83 = useCallback(() => {
    // Please sync "4.3.1 Care Library Care Coordinator Booking Calendar Time Sheet" to the project
  }, []);

  const onWdgtContainerClick84 = useCallback(() => {
    // Please sync "4.3.2 Care Library Care Coordinator Booking Calendar Time and Attendance" to the project
  }, []);

  const onWdgtContainerClick85 = useCallback(() => {
    // Please sync "4.4 Care Library Care Coordinator Profile" to the project
  }, []);

  const onWdgtContainerClick86 = useCallback(() => {
    // Please sync "4.4.1 Care Library Care Coordinator Profile About the Candidate" to the project
  }, []);

  const onWdgtContainerClick87 = useCallback(() => {
    // Please sync "4.4.2 Care Library Care Coordinator Profile References" to the project
  }, []);

  const onWdgtContainerClick88 = useCallback(() => {
    // Please sync "4.4.3 Care Library Care Coordinator Profile Training and Work History" to the project
  }, []);

  const onWdgtContainerClick89 = useCallback(() => {
    // Please sync "4.4.4 Care Library Care Coordinator Profile Background Checks" to the project
  }, []);

  const onWdgtContainerClick90 = useCallback(() => {
    // Please sync "4.4.7 Care Library Care Coordinator Profile Declaration" to the project
  }, []);

  const onWdgtContainerClick91 = useCallback(() => {
    // Please sync "4.4.6 Care Library Care Coordinator Profile Medical History" to the project
  }, []);

  const onWdgtContainerClick92 = useCallback(() => {
    // Please sync "4.4.5 Care Library Care Coordinator Profile Other Information" to the project
  }, []);

  const onSecTitleContainerClick2 = useCallback(() => {
    // Please sync "5. Care Library Carer " to the project
  }, []);

  const onWdgtContainerClick93 = useCallback(() => {
    // Please sync "5.1 Care Library Carer Dashboard" to the project
  }, []);

  const onWdgtContainerClick94 = useCallback(() => {
    // Please sync "5.1.1 Care Library Carer " to the project
  }, []);

  const onWdgtContainerClick95 = useCallback(() => {
    // Please sync "5.1.2 Care Library Carer  Dashboard Available Shifts" to the project
  }, []);

  const onWdgtContainerClick96 = useCallback(() => {
    // Please sync "5.1.3 Care Library Carer  Dashboard Last Shift Details" to the project
  }, []);

  const onWdgtContainerClick97 = useCallback(() => {
    // Please sync "5.1.4 Care Library Carer  Dashboard Experience" to the project
  }, []);

  const onWdgtContainerClick98 = useCallback(() => {
    // Please sync "5.1.5 Care Library Carer  Dashboard Request" to the project
  }, []);

  const onWdgtContainerClick99 = useCallback(() => {
    // Please sync "5.1.9 Care Library Carer  Dashboard Skills" to the project
  }, []);

  const onWdgtContainerClick100 = useCallback(() => {
    // Please sync "5.1.10 Care Library Carer  Dashboard Calendar" to the project
  }, []);

  const onWdgtContainerClick101 = useCallback(() => {
    // Please sync "5.1.8 Care Library Carer  Dashboard Accomplishment" to the project
  }, []);

  const onWdgtContainerClick102 = useCallback(() => {
    // Please sync "5.1.7 Care Library Carer  Dashboard Documents Expiry Dates" to the project
  }, []);

  const onWdgtContainerClick103 = useCallback(() => {
    // Please sync "5.1.6 Care Library Carer  Dashboard Overall Ratings" to the project
  }, []);

  const onWdgtContainerClick104 = useCallback(() => {
    // Please sync "5.2 Care Library Carer  Shift Details" to the project
  }, []);

  const onWdgtContainerClick105 = useCallback(() => {
    // Please sync "5.2.1 Care Library Carer  Shift Details Available Shifts" to the project
  }, []);

  const onWdgtContainerClick106 = useCallback(() => {
    // Please sync "5.2.2 Care Library Carer  Shift Details Upcoming Shifts" to the project
  }, []);

  const onWdgtContainerClick107 = useCallback(() => {
    // Please sync "5.2.4 Care Library Carer  Shift Details Cancelled Shifts" to the project
  }, []);

  const onWdgtContainerClick108 = useCallback(() => {
    // Please sync "5.2.3 Care Library Carer  Shift Details Completed Shifts" to the project
  }, []);

  const onWdgtContainerClick109 = useCallback(() => {
    // Please sync "5.7 Care Library Carer  Ratings" to the project
  }, []);

  const onWdgtContainerClick110 = useCallback(() => {
    // Please sync "5.7.1 Care Library Carer  Ratings Overall Ratings" to the project
  }, []);

  const onWdgtContainerClick111 = useCallback(() => {
    // Please sync "5.7.2 Care Library Carer  Ratings  Review Care Homes" to the project
  }, []);

  const onWdgtContainerClick112 = useCallback(() => {
    // Please sync "5.5 Care Library Carer Profile" to the project
  }, []);

  const onWdgtContainerClick113 = useCallback(() => {
    // Please sync "5.5.1 Care Library Carer Profile About the Candidate" to the project
  }, []);

  const onWdgtContainerClick114 = useCallback(() => {
    // Please sync "5.5.2 Care Library Carer Profile References" to the project
  }, []);

  const onWdgtContainerClick115 = useCallback(() => {
    // Please sync "5.5.3 Care Library Carer Profile Training and Work History" to the project
  }, []);

  const onWdgtContainerClick116 = useCallback(() => {
    // Please sync "5.5.4 Care Library Carer Profile Background Checks" to the project
  }, []);

  const onWdgtContainerClick117 = useCallback(() => {
    // Please sync "5.5.7 Care Library Carer Profile Declaration" to the project
  }, []);

  const onWdgtContainerClick118 = useCallback(() => {
    // Please sync "5.5.6 Care Library Carer Profile Medical History" to the project
  }, []);

  const onWdgtContainerClick119 = useCallback(() => {
    // Please sync "5.5.5 Care Library Carer Profile Other Information" to the project
  }, []);

  const onWdgtContainerClick120 = useCallback(() => {
    // Please sync "5.3 Care Library Carer My Calendar" to the project
  }, []);

  const onWdgtContainerClick121 = useCallback(() => {
    // Please sync "5.4 Care Library Carer Training" to the project
  }, []);

  const onWdgtContainerClick122 = useCallback(() => {
    // Please sync "5.6 Care Library Carer  Reports" to the project
  }, []);

  const onWdgtContainerClick123 = useCallback(() => {
    // Please sync "5.8 Care Library Carer   It Help Desk" to the project
  }, []);

  const onWdgtContainerClick124 = useCallback(() => {
    // Please sync "5.8.1 Care Library Carer   It Help Desk FAQs" to the project
  }, []);

  const onSecTitleContainerClick3 = useCallback(() => {
    // Please sync "6. Care Library Instructor" to the project
  }, []);

  const onWdgtContainerClick125 = useCallback(() => {
    // Please sync "6.1 Care Library Instructor Dashboard" to the project
  }, []);

  const onWdgtContainerClick126 = useCallback(() => {
    // Please sync "6.1.1 Care Library Instructor Dashboard Manage Course" to the project
  }, []);

  const onWdgtContainerClick127 = useCallback(() => {
    // Please sync "6.1.2 Care Library Instructor Dashboard Manage Course" to the project
  }, []);

  const onWdgtContainerClick128 = useCallback(() => {
    // Please sync "6.1.3 Care Library Instructor Dashboard Webinar" to the project
  }, []);

  const onWdgtContainerClick129 = useCallback(() => {
    // Please sync "6.1.6 Care Library Instructor Dashboard Recent Activity" to the project
  }, []);

  const onWdgtContainerClick130 = useCallback(() => {
    // Please sync "6.1.5 Care Library Instructor Dashboard Total Number of Students" to the project
  }, []);

  const onWdgtContainerClick131 = useCallback(() => {
    // Please sync "6.1.4 Care Library Instructor Dashboard Calendar" to the project
  }, []);

  const onWdgtContainerClick132 = useCallback(() => {
    // Please sync "6.2 Care Library Instructor Profile" to the project
  }, []);

  const onWdgtContainerClick133 = useCallback(() => {
    // Please sync "6.2.1 Care Library Instructor Profile About the Candidate" to the project
  }, []);

  const onWdgtContainerClick134 = useCallback(() => {
    // Please sync "6.2.2 Care Library Instructor Profile  References" to the project
  }, []);

  const onWdgtContainerClick135 = useCallback(() => {
    // Please sync "6.2.3 Care Library Instructor Profile  Training and Work History" to the project
  }, []);

  const onWdgtContainerClick136 = useCallback(() => {
    // Please sync "6.2.6 Care Library Instructor Profile  Declaration" to the project
  }, []);

  const onWdgtContainerClick137 = useCallback(() => {
    // Please sync "6.2.4 Care Library Instructor Profile  Background Checks" to the project
  }, []);

  const onWdgtContainerClick138 = useCallback(() => {
    // Please sync "6.2.5 Care Library Instructor Profile  Other Information" to the project
  }, []);

  const onWdgtContainerClick139 = useCallback(() => {
    router.push("/CL-6/care-library-instructor-manage-courses");
  }, [router]);

  const onWdgtContainerClick140 = useCallback(() => {
    router.push("/CL-6/care-library-instructor-training-info");
  }, [router]);

  const onWdgtContainerClick141 = useCallback(() => {
    router.push("/CL-6/care-library-instructor-webinar");
  }, [router]);

  const onWdgtContainerClick142 = useCallback(() => {
    router.push("/CL-6/");
  }, [router]);

  const onSecTitleContainerClick4 = useCallback(() => {
    // Please sync "3. Care Library Care Homes" to the project
  }, []);

  const onWdgtContainerClick143 = useCallback(() => {
    // Please sync "3.1 Care Library Care Homes Dashboard" to the project
  }, []);

  const onWdgtContainerClick144 = useCallback(() => {
    // Please sync "3.5 Care Library Care Homes Profile" to the project
  }, []);

  const onWdgtContainerClick145 = useCallback(() => {
    // Please sync "3.2 Care Library Care Homes Manage Shift " to the project
  }, []);

  const onWdgtContainerClick146 = useCallback(() => {
    // Please sync "3.7 Care Library Care Homes Ratings" to the project
  }, []);

  const onWdgtContainerClick147 = useCallback(() => {
    // Please sync "3.3 Care Library Care Homes Booking Calendar" to the project
  }, []);

  const onWdgtContainerClick148 = useCallback(() => {
    // Please sync "3.4 Care Library Care Homes User Management" to the project
  }, []);

  const onWdgtContainerClick149 = useCallback(() => {
    // Please sync "3.6 Care Library Care Homes Preferences" to the project
  }, []);

  const onWdgtContainerClick150 = useCallback(() => {
    // Please sync "3.1.1 Care Library Care Homes Dashboard Upcoming shifts" to the project
  }, []);

  const onWdgtContainerClick151 = useCallback(() => {
    // Please sync "3.1.2 Care Library Care Homes Dashboard Available shifts" to the project
  }, []);

  const onWdgtContainerClick152 = useCallback(() => {
    // Please sync "3.1.3 Care Library Care Homes Dashboard Last shift Details" to the project
  }, []);

  const onWdgtContainerClick153 = useCallback(() => {
    // Please sync "3.1.4 Care Library Care Homes Dashboard Canceled shifts " to the project
  }, []);

  const onWdgtContainerClick154 = useCallback(() => {
    // Please sync "3.1.7 Care Library Care Homes Dashboard Calendar" to the project
  }, []);

  const onWdgtContainerClick155 = useCallback(() => {
    // Please sync "3.1.6 Care Library Care Homes Dashboard Review Carers " to the project
  }, []);

  const onWdgtContainerClick156 = useCallback(() => {
    // Please sync "3.1.5 Care Library Care Homes Dashboard Overall Ratings  " to the project
  }, []);

  const onWdgtContainerClick157 = useCallback(() => {
    // Please sync "3.5.1 Care Library Care Homes Profile Client Profile Information" to the project
  }, []);

  const onWdgtContainerClick158 = useCallback(() => {
    // Please sync "3.5.2 Care Library Care Homes Profile Client Address" to the project
  }, []);

  const onWdgtContainerClick159 = useCallback(() => {
    // Please sync "3.5.3 Care Library Care Homes Profile Client Public Information" to the project
  }, []);

  const onWdgtContainerClick160 = useCallback(() => {
    // Please sync "3.5.4 Care Library Care Homes Profile Manage Departments" to the project
  }, []);

  const onWdgtContainerClick161 = useCallback(() => {
    // Please sync "3.5.7 Care Library Care Homes Profile Declaration" to the project
  }, []);

  const onWdgtContainerClick162 = useCallback(() => {
    // Please sync "3.5.6 Care Library Care Homes Profile Update Primary Email & Phone" to the project
  }, []);

  const onWdgtContainerClick163 = useCallback(() => {
    // Please sync "3.5.5 Care Library Care Homes Profile Client Admin Users" to the project
  }, []);

  const onWdgtContainerClick164 = useCallback(() => {
    // Please sync "3.2.1 Care Library Care Homes Manage Shift Requested Shifts " to the project
  }, []);

  const onWdgtContainerClick165 = useCallback(() => {
    // Please sync "3.2.2 Care Library Care Homes Manage Shift Upcoming Shifts" to the project
  }, []);

  const onWdgtContainerClick166 = useCallback(() => {
    // Please sync "3.2.4 Care Library Care Homes Manage Shift Sign Off Shifts " to the project
  }, []);

  const onWdgtContainerClick167 = useCallback(() => {
    // Please sync "3.2.3 Care Library Care Homes Manage Shift Completed Shifts " to the project
  }, []);

  const onWdgtContainerClick168 = useCallback(() => {
    // Please sync "3.7.1 Care Library Care Homes Ratings Overall Ratings" to the project
  }, []);

  const onWdgtContainerClick169 = useCallback(() => {
    // Please sync "3.7.2 Care Library Care Homes Ratings Review Career" to the project
  }, []);

  const onWdgtContainerClick170 = useCallback(() => {
    // Please sync "2.3.1 Care Library Admin Onboarding Add Carer" to the project
  }, []);

  const onWdgtContainerClick171 = useCallback(() => {
    // Please sync "2.3.2 Care Library Admin Onboarding Add Care Coordinator" to the project
  }, []);

  const onWdgtContainerClick172 = useCallback(() => {
    // Please sync "2.3.3 Care Library Admin Onboarding Add Instructor" to the project
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "10539px",
          textAlign: "center",
          fontSize: "18px",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "calc(50% - 920px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontSize: "32px",
            color: "#5a5867",
            fontFamily: "Outfit",
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
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Care Library
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
            fontSize: "32px",
            color: "#5a5867",
            fontFamily: "Outfit",
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
            src="/CL-6/chevron-1@2x.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40px",
            left: "40px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
          }}
          onClick={onBackBtnContainerClick}
        >
          <Image
            style={{ width: "48px", position: "relative", height: "48px" }}
            width={48}
            height={48}
            alt=""
            src="/CL-6/iconslineararrowleft1.svg"
          />
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
            height: "10319px",
            fontSize: "16px",
            color: "#565666",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "98px",
              left: "20px",
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
              src="/CL-6/rectangle@2x.png"
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
              Companies
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "98px",
              left: "854px",
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
              src="/CL-6/rectangle1@2x.png"
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
              System
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "22px",
              left: "253px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "615px",
              height: "255px",
              fontSize: "12px",
              color: "#00843d",
              fontFamily: "Inter",
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
                gap: "10px",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#232f3e",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  fontSize: "32px",
                  lineHeight: "40px",
                  fontWeight: "600",
                  fontFamily: "Outfit",
                  color: "#5a5867",
                }}
              >
                IG Verification Process
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick}
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
                src="/CL-6/rectangle2@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                <Typography variant="inherit" sx={{ margin: 0 }}>
                   Know Your Customer
                </Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  (KYC)
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "411px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick}
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
                src="/CL-6/rectangle3@2x.png"
              />
              <Box
                sx={{ alignSelf: "stretch", position: "relative", zIndex: "0" }}
              >
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Know your Business
                </Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  (KYB)
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "241px",
                left: "1229px",
                width: "224px",
                height: "111px",
                opacity: "0.9",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "251px",
                left: "33px",
                width: "218px",
                height: "15px",
                opacity: "0.9",
              }}
            />
            <Image
              style={{
                position: "absolute",
                top: "138px",
                left: "283px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "12px",
              left: "1023px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "787px",
              height: "265px",
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
                color: "#5a5867",
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
                AWS API’s
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "137px",
                left: "242px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "152px",
                left: "503px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "97px",
                left: "42px",
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
                src="/CL-6/rectangle4@2x.png"
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
                SNS (For Notifications)
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "97px",
                left: "303px",
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
                src="/CL-6/rectangle5@2x.png"
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
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  S3 (For Data Storing 
                </Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  (Image/File))
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "97px",
                left: "583px",
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
                src="/CL-6/rectangle6@2x.png"
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
                SES (For Emails) 
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "169px",
              left: "174px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-14.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "132px",
              left: "866px",
              maxHeight: "100%",
              width: "49px",
            }}
            width={49}
            height={22}
            alt=""
            src="/CL-6/arrow-15.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "214px",
              left: "950.5px",
              maxWidth: "100%",
              overflow: "hidden",
              height: "91px",
              objectFit: "contain",
            }}
            width={22}
            height={91}
            alt=""
            src="/CL-6/arrow-16.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "225px",
              left: "972px",
              borderRadius: "20px",
              width: "444px",
              height: "75px",
            }}
            width={444}
            height={75}
            alt=""
            src="/CL-6/wdgt--section.svg"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "477px",
            left: "79px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1772px",
            height: "3225px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "1676px",
              left: "256px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "534px",
              height: "394px",
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
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#232f3e",
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  fontSize: "32px",
                  lineHeight: "40px",
                  fontWeight: "600",
                  fontFamily: "Outfit",
                  color: "#00843d",
                }}
              >
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "68px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick1}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.7.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle7@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Available Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "221px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick2}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.7.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle8@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Completed Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "64px",
                left: "318px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick3}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.7.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle9@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Upcoming shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "217px",
                left: "318px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick4}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.7.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle10@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Work History
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "102px",
                left: "252px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "255px",
                left: "252px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
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
              padding: "12px 16px",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={onSecTitleContainerClick}
          >
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#232f3e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: "600",
                fontFamily: "Outfit",
                color: "#00843d",
              }}
            >
              Admin
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "190px",
              left: "15px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick5}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle11@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Dashboard
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "600px",
              left: "23px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick6}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.2
              </Typography>
            </Box>
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
              src="/CL-6/rectangle12@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Client Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "932px",
              left: "1153px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick7}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.6
              </Typography>
            </Box>
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
              src="/CL-6/rectangle13@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Staff Allocation
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "600px",
              left: "326px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick8}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.2.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle14@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Add Client
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "932px",
              left: "1456px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick9}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.6.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle15@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Allocate carer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "600px",
              left: "629px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick10}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.3
              </Typography>
            </Box>
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
              src="/CL-6/rectangle16@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Onboarding
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "967px",
              left: "23px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick11}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.4
              </Typography>
            </Box>
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
              src="/CL-6/rectangle17@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Staff Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1392px",
              left: "23px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick12}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.5
              </Typography>
            </Box>
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
              src="/CL-6/rectangle18@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Shift Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1837px",
              left: "23px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick13}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.7
              </Typography>
            </Box>
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
              src="/CL-6/rectangle19@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Staff Booking
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "2321px",
              left: "32px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick14}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.10
              </Typography>
            </Box>
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
              src="/CL-6/rectangle20@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Reports
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "2801px",
              left: "33px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick15}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.11
              </Typography>
            </Box>
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
              src="/CL-6/rectangle21@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Finance
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1837px",
              left: "864px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick16}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.9
              </Typography>
            </Box>
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
              src="/CL-6/rectangle22@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Unpublished shift
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1392px",
              left: "1146px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick17}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.8
              </Typography>
            </Box>
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
              src="/CL-6/rectangle23@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Booking Calendar
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "641px",
              left: "224px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "973px",
              left: "1354px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "641px",
              left: "534px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "114px",
              left: "237px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1492px",
              height: "405px",
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
                color: "#00843d",
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
                Dashboard Widgets
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick18}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle24@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
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
                top: "124px",
                left: "556px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "242px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "251px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "550px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "279px",
                left: "833px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "275px",
                left: "1136px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "347px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick19}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.2
                </Typography>
              </Box>
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
                src="/CL-6/images-1@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
                top: "94px",
                left: "661px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick20}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.3
                </Typography>
              </Box>
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
                src="/CL-6/icon@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
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
                top: "92px",
                left: "975px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick21}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle25@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
                top: "81px",
                left: "1290px",
                width: "219px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick22}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle26@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
                top: "122px",
                left: "879px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "118px",
                left: "1209px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "246px",
                left: "922px",
                width: "204px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick23}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "141px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.9
                </Typography>
              </Box>
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
                src="/CL-6/rectangle27@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
                top: "241px",
                left: "1229px",
                width: "224px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick24}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.10
                </Typography>
              </Box>
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
                src="/CL-6/rectangle28@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
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
                top: "243px",
                left: "638px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick25}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.8
                </Typography>
              </Box>
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
                src="/CL-6/rectangle29@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
                top: "243px",
                left: "354px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick26}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle30@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
                top: "251px",
                left: "33px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick27}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.1.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle31@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
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
              top: "242px",
              left: "158px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1009px",
              left: "180px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1434px",
              left: "180px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1879px",
              left: "180px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "2847px",
              left: "194px",
              maxHeight: "100%",
              width: "43px",
            }}
            width={43}
            height={15}
            alt=""
            src="/CL-6/arrow-8.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1879px",
              left: "1021px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-14.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1450px",
              left: "1315px",
              maxHeight: "100%",
              width: "60px",
            }}
            width={60}
            height={15}
            alt=""
            src="/CL-6/arrow-7.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "655px",
              left: "795px",
              maxHeight: "100%",
              width: "125px",
            }}
            width={125}
            height={15}
            alt=""
            src="/CL-6/arrow-2.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "806px",
              left: "256px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "814px",
              height: "394px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "68px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick28}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.4.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle32@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                View Profile
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "221px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick29}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.4.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle33@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Send/Resend Invitation
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "64px",
                left: "318px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick30}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.4.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle34@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Staff Summary
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "217px",
                left: "318px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick31}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.4.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle35@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Allocate Staff
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "70px",
                left: "596px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick32}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.4.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle36@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Send Email
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "223px",
                left: "596px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick33}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.4.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle37@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Delete
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "102px",
                left: "252px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "255px",
                left: "252px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "110px",
                left: "530px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "263px",
                left: "530px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "984px",
              left: "1101px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1445px",
              left: "1101px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "1231px",
              left: "256px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "814px",
              height: "394px",
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
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#232f3e",
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  fontSize: "32px",
                  lineHeight: "40px",
                  fontWeight: "600",
                  fontFamily: "Outfit",
                  color: "#00843d",
                }}
              >
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "68px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick34}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.5.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle38@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Shift Request
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "221px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick35}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.5.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle39@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Confirmed Shift
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "64px",
                left: "318px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick36}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.5.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle40@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Post New Shift
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "217px",
                left: "318px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick37}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.5.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle41@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Unfilled Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "70px",
                left: "596px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick38}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.5.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle42@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Book Staff Direct
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "223px",
                left: "596px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick39}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.5.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle43@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Shift Calendar
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "102px",
                left: "252px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "255px",
                left: "252px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "110px",
                left: "530px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "263px",
                left: "530px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "1888px",
              left: "834px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "1676px",
              left: "1097px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "632px",
              height: "394px",
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
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#232f3e",
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  fontSize: "32px",
                  lineHeight: "40px",
                  fontWeight: "600",
                  fontFamily: "Outfit",
                  color: "#00843d",
                }}
              >
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "96px",
                left: "36px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick40}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.9.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle40@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Shift Request
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "246px",
                left: "214px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick41}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.9.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle44@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Confirmed Shift
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "104px",
                left: "408px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick42}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.9.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle42@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Post New Shift
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "142px",
                left: "282px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1231px",
              left: "1379px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "310px",
              height: "416px",
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
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#232f3e",
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  fontSize: "32px",
                  lineHeight: "40px",
                  fontWeight: "600",
                  fontFamily: "Outfit",
                  color: "#00843d",
                }}
              >
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "79px",
                left: "56px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick43}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.8.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle45@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Time sheet
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "278px",
                left: "56px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick44}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.8.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle46@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Time and Attendance
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "223px",
                left: "139px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "2117px",
              left: "239px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1500px",
              height: "975px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "210px",
                left: "32px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick45}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.11.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle47@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Dashboard
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "648px",
                left: "32px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick46}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.11.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle48@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Setup
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "64px",
                left: "231px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#00843d",
                boxSizing: "border-box",
                width: "1238px",
                height: "405px",
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
                  color: "#00843d",
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
                  Dashboard Widgets
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "98px",
                  left: "45px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick47}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "158px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.1
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle49@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    display: "inline-block",
                    height: "15px",
                    flexShrink: "0",
                    zIndex: "0",
                  }}
                >
                  Account receivable
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "98px",
                  left: "658px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick48}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "158px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.3
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle50@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    display: "inline-block",
                    height: "15px",
                    flexShrink: "0",
                    zIndex: "0",
                  }}
                >
                  Clients Wise Avg Profit
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "251px",
                  left: "49px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick49}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "158px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.5
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle51@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    display: "inline-block",
                    height: "15px",
                    flexShrink: "0",
                    zIndex: "0",
                  }}
                >
                  Week Wise shift summary
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "251px",
                  left: "658px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick50}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "158px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.7
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle31@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    display: "inline-block",
                    height: "15px",
                    flexShrink: "0",
                    zIndex: "0",
                  }}
                >
                  Top Clients
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "124px",
                  left: "553px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-6/1.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "123px",
                  left: "884px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-6/1.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "123px",
                  left: "242px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-6/1.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "276px",
                  left: "251px",
                  borderRadius: "4px",
                  width: "29.1px",
                  height: "30px",
                }}
                width={29}
                height={30}
                alt=""
                src="/CL-6/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "276px",
                  left: "555px",
                  borderRadius: "4px",
                  width: "29.1px",
                  height: "30px",
                }}
                width={29}
                height={30}
                alt=""
                src="/CL-6/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "275px",
                  left: "886px",
                  borderRadius: "4px",
                  width: "29.1px",
                  height: "30px",
                }}
                width={29}
                height={30}
                alt=""
                src="/CL-6/.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "243px",
                  left: "354px",
                  width: "181px",
                  height: "108px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick51}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "128px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.6
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle52@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    zIndex: "0",
                  }}
                >
                  Amount receivable
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "243px",
                  left: "975px",
                  width: "181px",
                  height: "108px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick52}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "128px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.8
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle53@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    zIndex: "0",
                  }}
                >
                  Weekwise Clients Profits
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "98px",
                  left: "348px",
                  width: "181px",
                  height: "108px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick53}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "128px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.2
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle54@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    zIndex: "0",
                  }}
                >
                  Revenue Comparison
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "98px",
                  left: "969px",
                  width: "181px",
                  height: "108px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick54}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "128px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.1.4
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle55@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    zIndex: "0",
                  }}
                >
                  Staff Categories
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "536px",
                left: "878px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick55}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.11.3
                </Typography>
              </Box>
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
                src="/CL-6/images-1@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Invoice
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "770px",
                left: "891px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick56}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.11.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle50@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Client Payment Details
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "571px",
                left: "1100px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "812px",
                left: "1113px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "586px",
                left: "802px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "820px",
                left: "803px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "770px",
                left: "1248px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick57}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.11.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle56@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Reports
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "536px",
                left: "1248px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick58}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2.11.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle57@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Staff Payment Details
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "502px",
                left: "231px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#00843d",
                boxSizing: "border-box",
                width: "533px",
                height: "405px",
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
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#232f3e",
                    display: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    fontSize: "32px",
                    lineHeight: "40px",
                    fontWeight: "600",
                    fontFamily: "Outfit",
                    color: "#00843d",
                  }}
                >
                  Attributes
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "98px",
                  left: "45px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick59}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "158px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.2.1
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle58@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    display: "inline-block",
                    height: "15px",
                    flexShrink: "0",
                    zIndex: "0",
                  }}
                >
                  Client Rate Setup
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "256px",
                  left: "176px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick60}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "158px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.2.3
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle59@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    display: "inline-block",
                    height: "15px",
                    flexShrink: "0",
                    zIndex: "0",
                  }}
                >
                  Staff Code Setup
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "123px",
                  left: "242px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-6/1.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "98px",
                  left: "348px",
                  width: "181px",
                  height: "108px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  opacity: "0.9",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick61}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "128px",
                    boxShadow: 1,
                    borderRadius: "33px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "22px",
                      fontWeight: "700",
                    }}
                  >
                    2.11.2.2
                  </Typography>
                </Box>
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
                  src="/CL-6/rectangle60@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "12px",
                    color: "#00843d",
                    zIndex: "0",
                  }}
                >
                  Staff rate Setup
                </Box>
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "262px",
                left: "177px",
                maxHeight: "100%",
                width: "56px",
              }}
              width={56}
              height={15}
              alt=""
              src="/CL-6/arrow-11.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "700px",
                left: "177px",
                maxHeight: "100%",
                width: "56px",
              }}
              width={56}
              height={15}
              alt=""
              src="/CL-6/arrow-11.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              height: "2.76%",
              width: "41.97%",
              top: "0.4%",
              right: "1.81%",
              bottom: "96.83%",
              left: "56.22%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            width={742}
            height={89}
            alt=""
            src="/CL-6/image-29530@2x.png"
          />
          <Image
            style={{
              position: "absolute",
              top: "3131px",
              left: "66px",
              width: "1632px",
              height: "66px",
              objectFit: "cover",
            }}
            width={1632}
            height={66}
            alt=""
            src="/CL-6/image-29535@2x.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "5459px",
            left: "74px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1772px",
            height: "1776px",
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
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={onSecTitleContainerClick1}
          >
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#232f3e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: "600",
                fontFamily: "Outfit",
                color: "#00843d",
              }}
            >
              Care Coordinator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "250px",
              left: "15px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick62}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle11@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Dashboard
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "681px",
              left: "15px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick63}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.2
              </Typography>
            </Box>
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
              src="/CL-6/rectangle24@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Manage Shifts
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1549px",
              left: "62px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick64}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.5
              </Typography>
            </Box>
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
              src="/CL-6/rectangle13@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Staff Allocation
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1549px",
              left: "554px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick65}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.6
              </Typography>
            </Box>
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
              src="/CL-6/rectangle21@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Finance
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1549px",
              left: "1046px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick66}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.7
              </Typography>
            </Box>
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
              src="/CL-6/rectangle61@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Training
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1549px",
              left: "1538px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick67}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.8
              </Typography>
            </Box>
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
              src="/CL-6/rectangle20@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Reports
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "124px",
              left: "237px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1493px",
              height: "405px",
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
                color: "#00843d",
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
                Dashboard Widgets
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick68}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle62@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Shift Requests
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "124px",
                left: "616px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "242px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "251px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "620px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "279px",
                left: "1063px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "411px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick69}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle19@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Shift Bookings
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "803px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick70}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle63@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Whistle Blowing
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "92px",
                left: "1195px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick71}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle25@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Shift Insight
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "122px",
                left: "1059px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "246px",
                left: "1212px",
                width: "204px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick72}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "141px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.8
                </Typography>
              </Box>
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
                src="/CL-6/rectangle38@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Shift Request by Care Homes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "808px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick73}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle64@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Calendar
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "424px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick74}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle65@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Top Rated carers
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "251px",
                left: "33px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick75}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.1.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle28@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Carers Status
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "1577px",
              left: "382px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1589px",
              left: "871px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1591px",
              left: "1357px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "555px",
              left: "237px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "902px",
              height: "405px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick76}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.2.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle62@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Shift Request
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "124px",
                left: "556px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "242px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "251px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "277px",
                left: "560px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "347px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick77}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.2.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle40@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Post Shift
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "661px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick78}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.2.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle42@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Book Staff Direct
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "668px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick79}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.2.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle66@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Shift Calender
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "354px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick80}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.2.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle67@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Unfilled Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "251px",
                left: "33px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick81}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.2.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle39@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Confirmed Shift
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "302px",
              left: "158px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "733px",
              left: "158px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1199px",
              left: "165px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "691px",
              left: "1173px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick82}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.3
              </Typography>
            </Box>
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
              src="/CL-6/rectangle68@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Booking Calender
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "555px",
              left: "1405px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "325px",
              height: "405px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "68px",
                left: "77px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick83}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.3.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle46@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Time sheet
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "63px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick84}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.3.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle45@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Time and Attendance
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "205px",
                left: "146px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "743px",
              left: "1316px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "1137px",
              left: "22px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick85}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                4.4
              </Typography>
            </Box>
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
              src="/CL-6/rectangle69@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Profile
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1001px",
              left: "244px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1486px",
              height: "443px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick86}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle70@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                About the Candidate
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "418px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick87}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle71@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                References
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "817px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick88}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle72@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >{`Training & Work History`}</Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "92px",
                left: "1216px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick89}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle73@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Background Checks
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "1058px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick90}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle74@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Declaration
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "634px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick91}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle75@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Medical History
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "213px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick92}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4.4.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle76@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Other Information
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "165.5px",
                left: "235px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-9.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "397px",
                maxHeight: "100%",
                width: "200px",
              }}
              width={200}
              height={15}
              alt=""
              src="/CL-6/arrow-12.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "856px",
                maxHeight: "100%",
                width: "144px",
              }}
              width={144}
              height={15}
              alt=""
              src="/CL-6/arrow-13.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "612px",
                maxHeight: "100%",
                width: "110px",
              }}
              width={110}
              height={15}
              alt=""
              src="/CL-6/arrow-10.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "1035px",
                maxHeight: "100%",
                width: "118px",
              }}
              width={118}
              height={15}
              alt=""
              src="/CL-6/arrow-111.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "213px",
                left: "326px",
                width: "942px",
                height: "87px",
              }}
              width={942}
              height={87}
              alt=""
              src="/CL-6/vector-8.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              height: "4.18%",
              width: "41.97%",
              top: "0.51%",
              right: "1.47%",
              bottom: "95.32%",
              left: "56.56%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            width={742}
            height={74}
            alt=""
            src="/CL-6/image-29532@2x.png"
          />
          <Image
            style={{
              position: "absolute",
              top: "1687px",
              left: "64px",
              width: "1632px",
              height: "66px",
              objectFit: "cover",
            }}
            width={1632}
            height={66}
            alt=""
            src="/CL-6/image-29535@2x.png"
          />
          <Image
            style={{
              position: "absolute",
              top: "466.3px",
              left: "-4.5px",
              borderRadius: "3px",
              width: "183.6px",
              height: "79.4px",
              objectFit: "contain",
            }}
            width={184}
            height={79}
            alt=""
            src="/CL-6/2@2x.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "7301px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1772px",
            height: "1788px",
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
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={onSecTitleContainerClick2}
          >
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#232f3e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: "600",
                fontFamily: "Outfit",
                color: "#00843d",
              }}
            >{`Carer `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "250px",
              left: "15px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick93}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle11@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Dashboard
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "104px",
              left: "237px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1492px",
              height: "421px",
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
                color: "#00843d",
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
                Dashboard Widgets
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick94}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle9@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Upcoming shifts
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "124px",
                left: "556px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "242px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "296px",
                left: "251px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "296px",
                left: "550px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "299px",
                left: "843px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "295px",
                left: "1176px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "347px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick95}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle7@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Available Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "631px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick96}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle62@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Last Shift Details
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "92px",
                left: "925px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick97}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle77@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Experience
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "81px",
                left: "1241px",
                width: "219px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick98}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle78@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Request
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "122px",
                left: "829px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "118px",
                left: "1179px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "942px",
                width: "204px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick99}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "141px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.9
                </Typography>
              </Box>
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
                src="/CL-6/rectangle79@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Skills
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "1251px",
                width: "224px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick100}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.10
                </Typography>
              </Box>
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
                src="/CL-6/rectangle80@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Calendar
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "638px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick101}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.8
                </Typography>
              </Box>
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
                src="/CL-6/rectangle81@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Accomplishment
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "354px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick102}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle82@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Documents Expiry Dates
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "33px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick103}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.1.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle83@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Overall Ratings
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "754px",
              left: "1127px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "302px",
              left: "158px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              height: "4.15%",
              width: "41.97%",
              top: "0.5%",
              right: "1.47%",
              bottom: "95.35%",
              left: "56.56%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            width={742}
            height={74}
            alt=""
            src="/CL-6/image-29532@2x.png"
          />
          <Box
            sx={{
              position: "absolute",
              top: "687px",
              left: "16px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick104}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.2
              </Typography>
            </Box>
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
              src="/CL-6/rectangle24@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Shift Details
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "561px",
              left: "238px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "846px",
              height: "412px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "77px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick105}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.2.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle7@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Available Shifts
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "362px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "371px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "537px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick106}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.2.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle9@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Upcoming shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "544px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick107}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.2.4
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  zIndex: "1",
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0%",
                    right: "0%",
                    bottom: "0%",
                    left: "0%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-6/group@2x.png"
                />
              </Box>
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Cancelled Shift
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "251px",
                left: "73px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick108}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.2.3
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  zIndex: "1",
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0%",
                    right: "0%",
                    bottom: "0%",
                    left: "0%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-6/rectangle8@2x.png"
                />
              </Box>
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Completed Shifts
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "739px",
              left: "159px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "697px",
              left: "1166px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick109}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.7
              </Typography>
            </Box>
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
              src="/CL-6/rectangle83@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Ratings
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "561px",
              left: "1398px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "325px",
              height: "405px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "68px",
                left: "77px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick110}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.7.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle84@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Overall Ratings
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "261px",
                left: "63px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick111}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.7.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle85@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Review Care Homes
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "205px",
                left: "146px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "749px",
              left: "1309px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-14.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1200px",
              left: "164px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "1138px",
              left: "21px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick112}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.5
              </Typography>
            </Box>
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
              src="/CL-6/rectangle69@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Profile
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1002px",
              left: "243px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1486px",
              height: "443px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick113}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle70@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                About the Candidate
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "418px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick114}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle71@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                References
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "817px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick115}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle72@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >{`Training & Work History`}</Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "92px",
                left: "1216px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick116}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle73@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Background Checks
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "1058px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick117}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle74@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Declaration
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "634px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick118}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle75@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Medical History
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "213px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick119}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5.5.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle76@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Other Information
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "165.5px",
                left: "235px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-9.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "397px",
                maxHeight: "100%",
                width: "200px",
              }}
              width={200}
              height={15}
              alt=""
              src="/CL-6/arrow-12.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "856px",
                maxHeight: "100%",
                width: "144px",
              }}
              width={144}
              height={15}
              alt=""
              src="/CL-6/arrow-13.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "612px",
                maxHeight: "100%",
                width: "110px",
              }}
              width={110}
              height={15}
              alt=""
              src="/CL-6/arrow-10.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "1035px",
                maxHeight: "100%",
                width: "118px",
              }}
              width={118}
              height={15}
              alt=""
              src="/CL-6/arrow-111.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "213px",
                left: "326px",
                width: "942px",
                height: "87px",
              }}
              width={942}
              height={87}
              alt=""
              src="/CL-6/vector-8.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "1575px",
              left: "1356px",
              maxHeight: "100%",
              width: "144px",
            }}
            width={144}
            height={15}
            alt=""
            src="/CL-6/arrow-13.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "1514px",
              left: "27px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick120}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.3
              </Typography>
            </Box>
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
              src="/CL-6/rectangle68@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              My Calender
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1514px",
              left: "399px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick121}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.4
              </Typography>
            </Box>
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
              src="/CL-6/rectangle61@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Training
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1514px",
              left: "781px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick122}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.6
              </Typography>
            </Box>
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
              src="/CL-6/rectangle20@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Reports
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1514px",
              left: "1127px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick123}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.8
              </Typography>
            </Box>
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
              src="/CL-6/rectangle86@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              IT Help desk
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1514px",
              left: "1523px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick124}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                5.8.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle87@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              FAQs
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "1546px",
              left: "267px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1546px",
              left: "646px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1546px",
              left: "1002px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1689px",
              left: "50px",
              width: "1632px",
              height: "66px",
              objectFit: "cover",
            }}
            width={1632}
            height={66}
            alt=""
            src="/CL-6/image-29535@2x.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "9155px",
            left: "66px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1772px",
            height: "1293px",
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
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={onSecTitleContainerClick3}
          >
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#232f3e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: "600",
                fontFamily: "Outfit",
                color: "#00843d",
              }}
            >
              Instructor
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "250px",
              left: "15px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick125}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle11@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00cc00",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Dashboard
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "104px",
              left: "237px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1492px",
              height: "405px",
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
                color: "#00843d",
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
                Dashboard Widgets
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick126}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.1.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle88@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00cc00",
                  display: "inline-block",
                  height: "15px",
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
                top: "124px",
                left: "1036px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "412px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "411px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "1040px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "647px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick127}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.1.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle61@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00cc00",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Training Info
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "1251px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick128}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.1.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle89@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Webnior
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "263px",
                left: "1248px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick129}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.1.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle90@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Recent Activities
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "654px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick130}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.1.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle91@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00cc00",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Total No of Students
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "251px",
                left: "33px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick131}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.1.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle80@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Calendar
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "1074px",
              left: "416px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1080px",
              left: "882px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1080px",
              left: "1393px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "302px",
              left: "158px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Image
            style={{
              position: "absolute",
              height: "6.87%",
              width: "41.97%",
              top: "0.85%",
              right: "1.47%",
              bottom: "92.28%",
              left: "56.56%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            width={742}
            height={89}
            alt=""
            src="/CL-6/image-29534@2x.png"
          />
          <Box
            sx={{
              position: "absolute",
              top: "682px",
              left: "21px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick132}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6.2
              </Typography>
            </Box>
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
              src="/CL-6/rectangle69@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00cc00",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Profile
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "725px",
              left: "165px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "546px",
              left: "243px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1486px",
              height: "443px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "77px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick133}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.2.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle70@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00cc00",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                About the Candidate
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "618px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick134}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.2.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle71@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                References
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "1217px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick135}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.2.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle72@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >{`Training & Work History`}</Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "1138px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick136}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.2.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle74@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Declaration
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "173px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick137}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.2.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle73@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Background Checks
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "597px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick138}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6.2.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle76@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  zIndex: "0",
                }}
              >
                Other Information
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "165.3px",
                left: "275px",
                maxHeight: "100%",
                width: "338px",
              }}
              width={338}
              height={15}
              alt=""
              src="/CL-6/arrow-91.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "357px",
                maxHeight: "100%",
                width: "240px",
              }}
              width={240}
              height={15}
              alt=""
              src="/CL-6/arrow-121.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "856px",
                maxHeight: "100%",
                width: "251px",
              }}
              width={251}
              height={15}
              alt=""
              src="/CL-6/arrow-131.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "812px",
                maxHeight: "100%",
                width: "382px",
              }}
              width={382}
              height={15}
              alt=""
              src="/CL-6/arrow-101.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "210px",
                left: "326px",
                width: "1001px",
                height: "93px",
              }}
              width={1001}
              height={93}
              alt=""
              src="/CL-6/vector-81.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1048px",
              left: "102px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick139}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6.3
              </Typography>
            </Box>
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
              src="/CL-6/rectangle88@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00cc00",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Manage Courses
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1048px",
              left: "573px",
              width: "218px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick140}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6.4
              </Typography>
            </Box>
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
              src="/CL-6/rectangle61@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                zIndex: "0",
              }}
            >
              Trainee Info
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1048px",
              left: "1062px",
              width: "218px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick141}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6.5
              </Typography>
            </Box>
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
              src="/CL-6/rectangle89@2x.png"
            />
            <Box
              sx={{
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                zIndex: "0",
              }}
            >
              Webinar
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1048px",
              left: "1531px",
              width: "219px",
              height: "113px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick142}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                6.6
              </Typography>
            </Box>
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
              src="/CL-6/rectangle92@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                zIndex: "0",
              }}
            >
              Reports
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "1186px",
              left: "63px",
              width: "1632px",
              height: "66px",
              objectFit: "cover",
            }}
            width={1632}
            height={66}
            alt=""
            src="/CL-6/image-29535@2x.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "3783px",
            left: "79px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1772px",
            height: "1611px",
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
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={onSecTitleContainerClick4}
          >
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#232f3e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: "600",
                fontFamily: "Outfit",
                color: "#00843d",
              }}
            >
              Client/Care Home
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "190px",
              left: "15px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick143}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle11@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Dashboard
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1111px",
              left: "26px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick144}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.5
              </Typography>
            </Box>
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
              src="/CL-6/rectangle69@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Profile
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "701px",
              left: "26px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick145}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.2
              </Typography>
            </Box>
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
              src="/CL-6/rectangle24@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Manage Shifts
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "690px",
              left: "916px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick146}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.7
              </Typography>
            </Box>
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
              src="/CL-6/rectangle83@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Ratings
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "229px",
              left: "1560px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick147}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.3
              </Typography>
            </Box>
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
              src="/CL-6/rectangle68@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Booking Calendar
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "276px",
              left: "430.5px",
              width: "1309px",
              height: "391px",
            }}
            width={1309}
            height={391}
            alt=""
            src
          />
          <Box
            sx={{
              position: "absolute",
              top: "695px",
              left: "1558px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick148}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.4
              </Typography>
            </Box>
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
              src="/CL-6/rectangle93@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              User Management
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1171px",
              left: "1560px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick149}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                3.6
              </Typography>
            </Box>
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
              src="/CL-6/rectangle94@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Prefrences
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "114px",
              left: "237px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1235px",
              height: "405px",
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
                color: "#00843d",
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
                Dashboard Widgets
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick150}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle9@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Upcoming shifts
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "124px",
                left: "556px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "242px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "296px",
                left: "431px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "296px",
                left: "730px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "347px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick151}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle7@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Available Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "661px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick152}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle62@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Last Shift Details
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "92px",
                left: "975px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick153}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle95@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Canceled Shifts
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "122px",
                left: "879px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "263px",
                left: "818px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick154}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle96@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Calendar
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "263px",
                left: "534px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick155}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle97@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Review Carers
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "263px",
                left: "213px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick156}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.1.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle83@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Overall Ratings
              </Box>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "734px",
              left: "863px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "1035px",
              left: "248px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "1224px",
              height: "443px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick157}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle98@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Client Profile Information
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "347px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick158}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle99@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Client Address
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "94px",
                left: "661px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick159}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle100@2x.png"
              />
              <Box
                sx={{
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Client Public Information
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "92px",
                left: "975px",
                width: "219px",
                height: "113px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick160}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle101@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Manage Department
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "818px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick161}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.7
                </Typography>
              </Box>
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
                src="/CL-6/rectangle74@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Declaration
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "534px",
                width: "181px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick162}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "128px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.6
                </Typography>
              </Box>
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
                src="/CL-6/rectangle102@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >{`Update Email & Phone`}</Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "303px",
                left: "213px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick163}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.5.5
                </Typography>
              </Box>
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
                src="/CL-6/rectangle103@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Client Admin Users
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "165.5px",
                left: "235px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-9.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "397px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-122.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "350px",
                left: "688px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-122.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "534px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-122.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "165px",
                left: "879px",
                maxHeight: "100%",
                width: "112px",
              }}
              width={112}
              height={15}
              alt=""
              src="/CL-6/arrow-122.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "213.5px",
                left: "326.5px",
                width: "748.5px",
                height: "87px",
              }}
              width={749}
              height={87}
              alt=""
              src="/CL-6/vector-82.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "565px",
              left: "238px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "587px",
              height: "405px",
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
                color: "#00843d",
                fontFamily: "Outfit",
              }}
            >
              <Box
                sx={{
                  width: "146px",
                  position: "relative",
                  lineHeight: "40px",
                  fontWeight: "600",
                  display: "inline-block",
                  flexShrink: "0",
                }}
              >
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "98px",
                left: "37px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick164}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.2.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle7@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Requested Shifts
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "123px",
                left: "262px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "276px",
                left: "281px",
                borderRadius: "4px",
                width: "29.1px",
                height: "30px",
              }}
              width={29}
              height={30}
              alt=""
              src="/CL-6/.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "350px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick165}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.2.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle9@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Upcoming shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "243px",
                left: "367px",
                width: "200px",
                height: "108px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick166}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.2.4
                </Typography>
              </Box>
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
                src="/CL-6/rectangle7@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Sign Off Shifts
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "251px",
                left: "23px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick167}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.2.3
                </Typography>
              </Box>
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
                src="/CL-6/rectangle8@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Completed Shifts
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "554px",
              left: "1148px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#00843d",
              boxSizing: "border-box",
              width: "325px",
              height: "405px",
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
                color: "#00843d",
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
                Attributes
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "68px",
                left: "77px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick168}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.7.1
                </Typography>
              </Box>
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
                src="/CL-6/rectangle84@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#00843d",
                  display: "inline-block",
                  height: "15px",
                  flexShrink: "0",
                  zIndex: "0",
                }}
              >
                Overall Ratings
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "271px",
                left: "63px",
                width: "218px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                opacity: "0.9",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick169}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3.7.2
                </Typography>
              </Box>
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
                src="/CL-6/rectangle85@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  color: "#000",
                  zIndex: "0",
                }}
              >
                Review Carers
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "200px",
                left: "155px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-6/1.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "487px",
              left: "1635px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "985px",
              left: "1635px",
              borderRadius: "4px",
              width: "34px",
              height: "35px",
            }}
            width={34}
            height={35}
            alt=""
            src="/CL-6/1.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "242px",
              left: "158px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-14.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "1163px",
              left: "169px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-14.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "753px",
              left: "169px",
              maxHeight: "100%",
              width: "57px",
            }}
            width={57}
            height={15}
            alt=""
            src="/CL-6/arrow-21.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "742px",
              left: "1059px",
              maxHeight: "100%",
              width: "75px",
            }}
            width={75}
            height={15}
            alt=""
            src="/CL-6/arrow-14.svg"
          />
          <Image
            style={{
              position: "absolute",
              height: "5.54%",
              width: "41.97%",
              top: "0.68%",
              right: "1.47%",
              bottom: "93.78%",
              left: "56.56%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            width={742}
            height={89}
            alt=""
            src="/CL-6/image-29531@2x.png"
          />
          <Image
            style={{
              position: "absolute",
              top: "1515px",
              left: "53px",
              width: "1632px",
              height: "66px",
              objectFit: "cover",
            }}
            width={1632}
            height={66}
            alt=""
            src="/CL-6/image-29535@2x.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1026px",
            left: "1006px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "814px",
            height: "213px",
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
              color: "#5a5867",
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
              Attributes
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "68px",
              left: "37px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick170}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.3.1
              </Typography>
            </Box>
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
              src="/CL-6/rectangle104@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Add Carer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "68px",
              left: "315px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick171}
          >
            <Box
              sx={{
                margin: "0 !important",
                position: "absolute",
                top: "0px",
                right: "158px",
                boxShadow: 1,
                borderRadius: "33px",
                backgroundColor: "#456cea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "22px",
                  fontWeight: "700",
                }}
              >
                2.3.2
              </Typography>
            </Box>
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
              src="/CL-6/rectangle105@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "12px",
                color: "#00843d",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Add Care Coordinator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "64px",
              left: "600px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              opacity: "0.9",
              cursor: "pointer",
              fontSize: "12px",
              color: "#00843d",
            }}
            onClick={onWdgtContainerClick172}
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
              src="/CL-6/rectangle106@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Add Instructor
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "89px",
              left: "231px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "85px",
              left: "525px",
              borderRadius: "4px",
              width: "29.1px",
              height: "30px",
            }}
            width={29}
            height={30}
            alt=""
            src="/CL-6/.svg"
          />
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "318px",
            left: "906px",
            borderRadius: "20px",
            width: "40px",
            height: "161px",
          }}
          width={40}
          height={161}
          alt=""
          src="/CL-6/section--section.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1059px",
            left: "60px",
            width: "962px",
            height: "6244px",
          }}
          width={962}
          height={6244}
          alt=""
          src="/CL-6/wdgt--section1.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1011px",
            left: "1410px",
            width: "435px",
            height: "4610.5px",
            objectFit: "contain",
          }}
          width={435}
          height={4611}
          alt=""
          src="/CL-6/wdgt--section2.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1196.5px",
            left: "86.5px",
            width: "413.5px",
            height: "2584px",
            objectFit: "contain",
          }}
          width={414}
          height={2584}
          alt=""
          src="/CL-6/wdgt--section3.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "2007px",
            left: "45px",
            width: "360px",
            height: "2435px",
            objectFit: "contain",
          }}
          width={360}
          height={2435}
          alt=""
          src="/CL-6/wdgt--section4.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1695px",
            left: "68px",
            width: "659px",
            height: "6277px",
            objectFit: "contain",
          }}
          width={659}
          height={6277}
          alt=""
          src="/CL-6/wdgt--section5.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "4538px",
            left: "74px",
            width: "119px",
            height: "1608.5px",
            objectFit: "contain",
          }}
          width={119}
          height={1609}
          alt=""
          src="/CL-6/wdgt--section6.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "6128.5px",
            left: "81.5px",
            width: "571.5px",
            height: "1981px",
            objectFit: "contain",
          }}
          width={572}
          height={1981}
          alt=""
          src="/CL-6/wdgt--section7.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "6001px",
            left: "953px",
            width: "906px",
            height: "1938px",
            objectFit: "contain",
          }}
          width={906}
          height={1938}
          alt=""
          src="/CL-6/wdgt--section8.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "8872px",
            left: "625px",
            borderRadius: "20px",
            width: "39px",
            height: "285px",
          }}
          width={39}
          height={285}
          alt=""
          src="/CL-6/wdgt--section9.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "4315px",
            left: "1101px",
            width: "796px",
            height: "3674px",
            objectFit: "contain",
          }}
          width={796}
          height={3674}
          alt=""
          src="/CL-6/wdgt--section10.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "7088px",
            left: "33px",
            width: "1136px",
            height: "2069px",
          }}
          width={1136}
          height={2069}
          alt=""
          src="/CL-6/wdgt--wdgt.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "6486px",
            left: "15px",
            width: "193.5px",
            height: "2671px",
            objectFit: "contain",
          }}
          width={194}
          height={2671}
          alt=""
          src="/CL-6/section--section1.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1162px",
            left: "1860px",
            borderRadius: "3px",
            width: "27px",
            height: "381px",
            objectFit: "contain",
          }}
          width={27}
          height={381}
          alt=""
          src="/CL-6/3@2x.png"
        />
        <Box
          sx={{
            position: "absolute",
            top: "1249px",
            left: "86px",
            borderRadius: "3px",
            backgroundColor: "#fff",
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "#000",
            boxSizing: "border-box",
            width: "98px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "6px 9px",
            textAlign: "left",
            fontSize: "12px",
            color: "#000",
          }}
        >
          <Box sx={{ flex: 1, position: "relative" }}>
            User will perform IG verification to land on Carer Dashboard
          </Box>
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "1147px",
            left: "1701px",
            width: "164px",
            height: "8010px",
            objectFit: "contain",
          }}
          width={164}
          height={8010}
          alt=""
          src="/CL-6/wdgt--section11.svg"
        />
        <Box
          sx={{
            position: "absolute",
            top: "999px",
            left: "1418px",
            borderRadius: "3px",
            backgroundColor: "#fff",
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "#000",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "6px 9px",
            textAlign: "left",
            fontSize: "12px",
            color: "#000",
          }}
        >
          <Box sx={{ position: "relative" }}>
            User will perform IG verification to land on Care Coordinator
          </Box>
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "4442px",
            left: "55px",
            width: "348px",
            height: "1662px",
            objectFit: "contain",
          }}
          width={348}
          height={1662}
          alt=""
          src="/CL-6/wdgt--section12.svg"
        />
      </Box>
      {isColorLegendsKeyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeColorLegendsKey}
        >
          <ColorLegendsKey onClose={closeColorLegendsKey} />
        </PortalPopup>
      )}
    </>
  );
};

export default CareLibraryProductFeaturesRelease1;
