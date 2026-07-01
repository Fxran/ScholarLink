import { useState, useEffect, useRef } from "react";
import {
  FiHelpCircle,
  FiUser,
  FiMapPin,
  FiPhone,
  FiInfo,
  FiShield,
  FiCalendar,
  FiChevronDown,
  FiArrowRight,
  FiArrowLeft,
  FiBookOpen,
  FiMail,
  FiCheckCircle,
  FiUpload,
  FiEye,
  FiTrash2,
  FiEdit2,
  FiCheck,
} from "react-icons/fi";
import logoImg from "../../assets/{images,icons}/logo.png";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import "./studentOnboarding.css";

// ============================================================
// Firebase placeholder functions
// ------------------------------------------------------------
// These functions are stubbed out for now. React state holds all
// onboarding data locally. Once Firebase is wired up, replace the
// TODO comments below with real Firestore / Storage / Auth calls.
// ============================================================

async function savePersonalInformation(studentUID, personalInformation) {
  // TODO: setDoc(doc(db, "students", studentUID), { personalInformation }, { merge: true })
  console.log("savePersonalInformation()", studentUID, personalInformation);
  return Promise.resolve({ success: true });
}

async function saveEducationalBackground(studentUID, educationalBackground) {
  // TODO: setDoc(doc(db, "students", studentUID), { educationalBackground }, { merge: true })
  console.log("saveEducationalBackground()", studentUID, educationalBackground);
  return Promise.resolve({ success: true });
}

async function saveContactInformation(studentUID, contactInformation) {
  // TODO: setDoc(doc(db, "students", studentUID), { contactInformation }, { merge: true })
  console.log("saveContactInformation()", studentUID, contactInformation);
  return Promise.resolve({ success: true });
}

async function sendVerificationEmail(email) {
  // TODO: import { sendEmailVerification } from "firebase/auth" and call
  // sendEmailVerification(auth.currentUser) once the user is authenticated.
  console.log("sendEmailVerification()", email);
  return Promise.resolve({ success: true });
}

async function submitOnboarding(studentUID, formData) {
  // TODO: setDoc(doc(db, "students", studentUID), {
  //   ...formData,
  //   onboardingCompleted: true,
  // }, { merge: true })
  console.log("submitOnboarding()", studentUID, formData);
  return Promise.resolve({ success: true });
}

async function loadStudentProfile(studentUID) {
  // TODO: const snap = await getDoc(doc(db, "students", studentUID));
  // return snap.exists() ? snap.data() : null;
  console.log("loadStudentProfile()", studentUID);
  return Promise.resolve(null);
}

// ============================================================
// Static config
// ============================================================
const Logo_Image = logoImg; 

// Placeholder logo image. Replace with actual logo path.
const STEPS = [
  {
    id: 1,
    label: "Personal Information",
    sublabel: "Tell us about yourself",
    icon: FiUser,
  },
  {
    id: 2,
    label: "Educational Background",
    sublabel: "Add your educational details",
    icon: HiOutlineAcademicCap,
  },
  {
    id: 3,
    label: "Contact & Email Verification",
    sublabel: "Verify your email address",
    icon: FiMail,
  },
  {
    id: 4,
    label: "Review & Submit",
    sublabel: "Review your information",
    icon: FiCheckCircle,
  },
];

const REQUIRED_DOCUMENTS = [
  { id: "studentId", label: "Student ID" },
  { id: "certOfRegistration", label: "Certificate of Registration" },
  { id: "gradesOrTor", label: "Grades / TOR" },
  { id: "goodMoral", label: "Good Moral" },
];

const MAX_FILE_SIZE_MB = 10;
const ACCEPTED_FILE_TYPES = [".pdf", ".jpg", ".jpeg", ".png"];

// ============================================================
// Small reusable form elements
// ============================================================

function FieldLabel({ children, optional }) {
  return (
    <label className="field-label">
      {children}
      {optional && <span className="field-optional"> (Optional)</span>}
    </label>
  );
}

function TextInput({ label, optional, error, ...rest }) {
  return (
    <div className="form-field">
      <FieldLabel optional={optional}>{label}</FieldLabel>
      <input className={`text-input ${error ? "input-error" : ""}`} {...rest} />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

function DateInput({ label, optional, error, ...rest }) {
  return (
    <div className="form-field">
      <FieldLabel optional={optional}>{label}</FieldLabel>
      <div className={`input-with-icon ${error ? "input-error" : ""}`}>
        <FiCalendar className="input-icon" />
        <input type="date" className="text-input text-input-plain" {...rest} />
      </div>
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

function SelectInput({ label, optional, error, options, ...rest }) {
  return (
    <div className="form-field">
      <FieldLabel optional={optional}>{label}</FieldLabel>
      <div className={`input-with-icon select-wrap ${error ? "input-error" : ""}`}>
        <select className="text-input text-input-plain select-input" {...rest}>
          <option value="" disabled>
            Select
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <FiChevronDown className="input-icon select-caret" />
      </div>
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="section-heading">
      <span className="section-icon">
        <Icon />
      </span>
      <h3>{children}</h3>
    </div>
  );
}

// ============================================================
// STEP 1 — Personal Information
// ============================================================

function StepPersonalInformation({ data, errors, onChange }) {
  return (
    <div className="form-card">
      <SectionHeading icon={FiUser}>Basic Information</SectionHeading>
      <div className="form-grid form-grid-3">
        <TextInput
          label="First Name"
          placeholder="Juan"
          value={data.firstName || ""}
          error={errors.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
        />
        <TextInput
          label="Middle Name"
          optional
          placeholder="Miguel"
          value={data.middleName || ""}
          onChange={(e) => onChange("middleName", e.target.value)}
        />
        <TextInput
          label="Last Name"
          placeholder="Dela Cruz"
          value={data.lastName || ""}
          error={errors.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-2">
        <DateInput
          label="Date of Birth"
          value={data.dateOfBirth || ""}
          error={errors.dateOfBirth}
          onChange={(e) => onChange("dateOfBirth", e.target.value)}
        />
        <SelectInput
          label="Gender"
          options={["Male", "Female", "Prefer not to say"]}
          value={data.gender || ""}
          error={errors.gender}
          onChange={(e) => onChange("gender", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-2">
        <SelectInput
          label="Civil Status"
          options={["Single", "Married", "Widowed", "Separated"]}
          value={data.civilStatus || ""}
          error={errors.civilStatus}
          onChange={(e) => onChange("civilStatus", e.target.value)}
        />
        <TextInput
          label="Nationality"
          placeholder="Filipino"
          value={data.nationality || ""}
          error={errors.nationality}
          onChange={(e) => onChange("nationality", e.target.value)}
        />
      </div>

      <div className="section-divider" />

      <SectionHeading icon={FiMapPin}>Address</SectionHeading>
      <div className="form-grid form-grid-2">
        <TextInput
          label="House/Street Address"
          placeholder="123 Mabini Street"
          value={data.street || ""}
          error={errors.street}
          onChange={(e) => onChange("street", e.target.value)}
        />
        <TextInput
          label="Barangay"
          placeholder="San Isidro"
          value={data.barangay || ""}
          error={errors.barangay}
          onChange={(e) => onChange("barangay", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-3">
        <TextInput
          label="City / Municipality"
          placeholder="Quezon City"
          value={data.city || ""}
          error={errors.city}
          onChange={(e) => onChange("city", e.target.value)}
        />
        <TextInput
          label="Province"
          placeholder="NCR - National Capital Region"
          value={data.province || ""}
          error={errors.province}
          onChange={(e) => onChange("province", e.target.value)}
        />
        <TextInput
          label="ZIP Code"
          placeholder="1100"
          value={data.zipCode || ""}
          error={errors.zipCode}
          onChange={(e) => onChange("zipCode", e.target.value)}
        />
      </div>

      <div className="section-divider" />

      <SectionHeading icon={FiPhone}>Other Information</SectionHeading>
      <div className="form-grid form-grid-2">
        <SelectInput
          label="Student Type"
          options={["New Student", "Freshman", "Regular", "Transferee", "Returnee", "PWD"]}
          value={data.studentType || ""}
          error={errors.studentType}
          onChange={(e) => onChange("studentType", e.target.value)}
        />
        <SelectInput
          label="Are you a person with disability (PWD)?"
          options={["Yes", "No"]}
          value={data.pwd || ""}
          error={errors.pwd}
          onChange={(e) => onChange("pwd", e.target.value)}
        />
      </div>
    </div>
  );
}

// ============================================================
// STEP 2 — Educational Background
// ============================================================

function UploadCard({ label, file, onUpload, onRemove }) {
  const inputRef = useRef(null);

  return (
    <div className="upload-card">
      <div className="upload-card-top">
        <span className="upload-card-label">{label}</span>
        {file && (
          <span className="upload-badge">
            <FiCheck /> Uploaded
          </span>
        )}
      </div>

      {!file ? (
        <button
          type="button"
          className="upload-btn"
          onClick={() => inputRef.current?.click()}
        >
          <FiUpload /> Upload File
        </button>
      ) : (
        <div className="upload-file-row">
          <span className="upload-file-name">{file.name}</span>
          <div className="upload-file-actions">
            <button type="button" className="icon-btn" title="Preview">
              <FiEye />
            </button>
            <button
              type="button"
              className="icon-btn icon-btn-danger"
              title="Remove"
              onClick={onRemove}
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_FILE_TYPES.join(",")}
        hidden
        onChange={(e) => {
          const selected = e.target.files?.[0];
          if (!selected) return;
          if (selected.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            alert(`File exceeds the ${MAX_FILE_SIZE_MB}MB limit.`);
            return;
          }
          onUpload(selected);
        }}
      />
      <span className="upload-hint">PDF, JPG, JPEG, PNG — Max {MAX_FILE_SIZE_MB}MB</span>
    </div>
  );
}

function StepEducationalBackground({ data, errors, onChange, documents, onUploadDocument, onRemoveDocument }) {
  return (
    <div className="form-card">
      <SectionHeading icon={HiOutlineAcademicCap}>Academic Information</SectionHeading>
      <div className="form-grid form-grid-2">
        <TextInput
          label="Current School"
          placeholder="e.g. University of the Philippines"
          value={data.currentSchool || ""}
          error={errors.currentSchool}
          onChange={(e) => onChange("currentSchool", e.target.value)}
        />
        <TextInput
          label="School ID"
          placeholder="e.g. 2021-00123"
          value={data.schoolId || ""}
          error={errors.schoolId}
          onChange={(e) => onChange("schoolId", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-2">
        <TextInput
          label="Student Number"
          placeholder="e.g. 2021-10456"
          value={data.studentNumber || ""}
          error={errors.studentNumber}
          onChange={(e) => onChange("studentNumber", e.target.value)}
        />
        <TextInput
          label="Student Email"
          type="email"
          placeholder="juan.delacruz@school.edu.ph"
          value={data.studentEmail || ""}
          error={errors.studentEmail}
          onChange={(e) => onChange("studentEmail", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-2">
        <TextInput
          label="Course"
          placeholder="e.g. BS Computer Science"
          value={data.course || ""}
          error={errors.course}
          onChange={(e) => onChange("course", e.target.value)}
        />
        <TextInput
          label="Program"
          placeholder="e.g. Bachelor of Science"
          value={data.program || ""}
          error={errors.program}
          onChange={(e) => onChange("program", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-3">
        <SelectInput
          label="Year Level"
          options={["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"]}
          value={data.yearLevel || ""}
          error={errors.yearLevel}
          onChange={(e) => onChange("yearLevel", e.target.value)}
        />
        <SelectInput
          label="Semester"
          options={["1st Semester", "2nd Semester", "Summer"]}
          value={data.semester || ""}
          error={errors.semester}
          onChange={(e) => onChange("semester", e.target.value)}
        />
        <TextInput
          label="Academic Year"
          placeholder="e.g. 2025-2026"
          value={data.academicYear || ""}
          error={errors.academicYear}
          onChange={(e) => onChange("academicYear", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-3">
        <SelectInput
          label="Student Status"
          options={["Regular", "Irregular", "Probationary"]}
          value={data.studentStatus || ""}
          error={errors.studentStatus}
          onChange={(e) => onChange("studentStatus", e.target.value)}
        />
        <TextInput
          label="GPA / GWA"
          placeholder="e.g. 1.75"
          value={data.gwa || ""}
          error={errors.gwa}
          onChange={(e) => onChange("gwa", e.target.value)}
        />
        <TextInput
          label="Expected Graduation"
          placeholder="e.g. 2027"
          value={data.expectedGraduation || ""}
          error={errors.expectedGraduation}
          onChange={(e) => onChange("expectedGraduation", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-1">
        <TextInput
          label="School Address"
          placeholder="e.g. Diliman, Quezon City"
          value={data.schoolAddress || ""}
          error={errors.schoolAddress}
          onChange={(e) => onChange("schoolAddress", e.target.value)}
        />
      </div>

      <div className="section-divider" />

      <SectionHeading icon={FiUpload}>Upload Requirements</SectionHeading>
      <div className="upload-grid">
        {REQUIRED_DOCUMENTS.map((doc) => (
          <UploadCard
            key={doc.id}
            label={doc.label}
            file={documents[doc.id]}
            onUpload={(file) => onUploadDocument(doc.id, file)}
            onRemove={() => onRemoveDocument(doc.id)}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// STEP 3 — Contact & Email Verification
// ============================================================

function StepContactVerification({ data, errors, onChange, verification, onSendVerification }) {
  return (
    <div className="form-card">
      <SectionHeading icon={FiMail}>Contact Information</SectionHeading>
      <div className="form-grid form-grid-2">
        <TextInput
          label="Primary Email"
          type="email"
          placeholder="juan.delacruz@email.com"
          value={data.primaryEmail || ""}
          error={errors.primaryEmail}
          onChange={(e) => onChange("primaryEmail", e.target.value)}
        />
        <TextInput
          label="Confirm Email"
          type="email"
          placeholder="juan.delacruz@email.com"
          value={data.confirmEmail || ""}
          error={errors.confirmEmail}
          onChange={(e) => onChange("confirmEmail", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-2">
        <TextInput
          label="Mobile Number"
          placeholder="09XX XXX XXXX"
          value={data.mobileNumber || ""}
          error={errors.mobileNumber}
          onChange={(e) => onChange("mobileNumber", e.target.value)}
        />
        <TextInput
          label="Alternative Contact Number"
          optional
          placeholder="09XX XXX XXXX"
          value={data.altContactNumber || ""}
          onChange={(e) => onChange("altContactNumber", e.target.value)}
        />
      </div>

      <div className="section-divider" />

      <SectionHeading icon={FiUser}>Guardian / Emergency Contact</SectionHeading>
      <div className="form-grid form-grid-2">
        <TextInput
          label="Guardian Name"
          placeholder="e.g. Maria Dela Cruz"
          value={data.guardianName || ""}
          error={errors.guardianName}
          onChange={(e) => onChange("guardianName", e.target.value)}
        />
        <TextInput
          label="Relationship"
          placeholder="e.g. Mother"
          value={data.relationship || ""}
          error={errors.relationship}
          onChange={(e) => onChange("relationship", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-2">
        <TextInput
          label="Guardian Contact Number"
          placeholder="09XX XXX XXXX"
          value={data.guardianContact || ""}
          error={errors.guardianContact}
          onChange={(e) => onChange("guardianContact", e.target.value)}
        />
        <TextInput
          label="Emergency Contact"
          placeholder="09XX XXX XXXX"
          value={data.emergencyContact || ""}
          error={errors.emergencyContact}
          onChange={(e) => onChange("emergencyContact", e.target.value)}
        />
      </div>

      <div className="form-grid form-grid-1">
        <TextInput
          label="Address"
          placeholder="Same as personal address, unless different"
          value={data.contactAddress || ""}
          onChange={(e) => onChange("contactAddress", e.target.value)}
        />
      </div>

      <div className="section-divider" />

      <SectionHeading icon={FiShield}>Verification</SectionHeading>
      <div className="verification-card">
        <div className="verification-text">
          <p className="verification-title">Verify your email address</p>
          <p className="verification-subtitle">
            We'll send a verification link to {data.primaryEmail || "your email"}.
          </p>
        </div>

        {verification.verified ? (
          <span className="verified-badge">
            <FiCheckCircle /> Verified
          </span>
        ) : verification.sent ? (
          <span className="sent-badge">
            <FiCheck /> Verification Email Sent
          </span>
        ) : (
          <button type="button" className="btn btn-outline" onClick={onSendVerification}>
            Send Verification Email
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// STEP 4 — Review & Submit
// ============================================================

function ReviewRow({ label, value }) {
  return (
    <div className="review-row">
      <span className="review-label">{label}</span>
      <span className="review-value">{value || "—"}</span>
    </div>
  );
}

function ReviewSection({ title, onEdit, children }) {
  return (
    <div className="review-section">
      <div className="review-section-header">
        <h4>{title}</h4>
        <button type="button" className="btn-link" onClick={onEdit}>
          <FiEdit2 /> Edit
        </button>
      </div>
      <div className="review-section-body">{children}</div>
    </div>
  );
}

function StepReviewSubmit({ formData, documents, certified, onCertifiedChange, goToStep }) {
  const { personal, education, contact } = formData;

  return (
    <div className="form-card">
      <ReviewSection title="Personal Information" onEdit={() => goToStep(1)}>
        <ReviewRow
          label="Full Name"
          value={[personal.firstName, personal.middleName, personal.lastName]
            .filter(Boolean)
            .join(" ")}
        />
        <ReviewRow label="Date of Birth" value={personal.dateOfBirth} />
        <ReviewRow label="Gender" value={personal.gender} />
        <ReviewRow label="Civil Status" value={personal.civilStatus} />
        <ReviewRow label="Nationality" value={personal.nationality} />
        <ReviewRow
          label="Address"
          value={[personal.street, personal.barangay, personal.city, personal.province, personal.zipCode]
            .filter(Boolean)
            .join(", ")}
        />
        <ReviewRow label="Student Type" value={personal.studentType} />
      </ReviewSection>

      <ReviewSection title="Educational Background" onEdit={() => goToStep(2)}>
        <ReviewRow label="Current School" value={education.currentSchool} />
        <ReviewRow label="Course / Program" value={[education.course, education.program].filter(Boolean).join(" / ")} />
        <ReviewRow label="Year Level" value={education.yearLevel} />
        <ReviewRow label="Semester" value={education.semester} />
        <ReviewRow label="Academic Year" value={education.academicYear} />
        <ReviewRow label="GPA / GWA" value={education.gwa} />
      </ReviewSection>

      <ReviewSection title="Contact Information" onEdit={() => goToStep(3)}>
        <ReviewRow label="Primary Email" value={contact.primaryEmail} />
        <ReviewRow label="Mobile Number" value={contact.mobileNumber} />
        <ReviewRow label="Guardian Name" value={contact.guardianName} />
        <ReviewRow label="Guardian Contact" value={contact.guardianContact} />
      </ReviewSection>

      <ReviewSection title="Uploaded Documents" onEdit={() => goToStep(2)}>
        {REQUIRED_DOCUMENTS.map((doc) => (
          <ReviewRow key={doc.id} label={doc.label} value={documents[doc.id]?.name} />
        ))}
      </ReviewSection>

      <div className="section-divider" />

      <label className="certify-row">
        <input
          type="checkbox"
          checked={certified}
          onChange={(e) => onCertifiedChange(e.target.checked)}
        />
        <span>I certify that the information provided is true and correct.</span>
      </label>
    </div>
  );
}

// ============================================================
// Sidebar
// ============================================================

function Sidebar({ currentStep, progressPercent }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-intro">
        <h2>Student Onboarding</h2>
        <p>Let's get you all set up. This will only take a few minutes.</p>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="progress-meta">
          <span>Step {currentStep} of {STEPS.length}</span>
          <span>{progressPercent}% Complete</span>
        </div>
      </div>

      <ul className="step-list">
        {STEPS.map((step) => {
          const Icon = step.icon;
          const state =
            step.id < currentStep ? "completed" : step.id === currentStep ? "current" : "upcoming";
          return (
            <li key={step.id} className={`step-item step-item-${state}`}>
              <span className="step-icon-wrap">
                <Icon />
              </span>
              <span className="step-text">
                <span className="step-title">
                  {step.id}. {step.label}
                </span>
                <span className="step-sub">{step.sublabel}</span>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="sidebar-safe-box">
        <span className="safe-icon">
          <FiShield />
        </span>
        <div>
          <p className="safe-title">Your information is safe</p>
          <p className="safe-sub">We protect your data and never share it with third parties.</p>
        </div>
      </div>
    </aside>
  );
}

// ============================================================
// Main Page
// ============================================================

const STEP_TITLES = {
  1: {
    heading: "1. Personal Information",
    description: "Please provide your personal details as they appear on your government-issued ID.",
  },
  2: {
    heading: "2. Educational Background",
    description: "Tell us about your current school and upload the required documents.",
  },
  3: {
    heading: "3. Contact & Email Verification",
    description: "Provide your contact details and verify your email address.",
  },
  4: {
    heading: "4. Review & Submit",
    description: "Please review your information carefully before submitting your application.",
  },
};

export default function StudentOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    education: {},
    contact: {},
  });
  const [documents, setDocuments] = useState({});
  const [errors, setErrors] = useState({});
  const [verification, setVerification] = useState({ sent: false, verified: false });
  const [certified, setCertified] = useState(false);

  // Placeholder studentUID until Firebase Auth is connected.
  const studentUID = "TODO_STUDENT_UID";

  // Load any previously saved profile on mount.
  useEffect(() => {
    (async () => {
      const profile = await loadStudentProfile(studentUID);
      if (profile) {
        setFormData((prev) => ({ ...prev, ...profile }));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progressPercent = currentStep * 25;

  function updateSection(section, field, value) {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function uploadDocument(docId, file) {
    setDocuments((prev) => ({ ...prev, [docId]: file }));
  }

  function removeDocument(docId) {
    setDocuments((prev) => {
      const next = { ...prev };
      delete next[docId];
      return next;
    });
  }

  function validateStep(step) {
    const newErrors = {};
    if (step === 1) {
      const p = formData.personal;
      if (!p.firstName) newErrors.firstName = "First name is required.";
      if (!p.lastName) newErrors.lastName = "Last name is required.";
      if (!p.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
      if (!p.gender) newErrors.gender = "Gender is required.";
      if (!p.civilStatus) newErrors.civilStatus = "Civil status is required.";
      if (!p.nationality) newErrors.nationality = "Nationality is required.";
      if (!p.street) newErrors.street = "House/Street address is required.";
      if (!p.barangay) newErrors.barangay = "Barangay is required.";
      if (!p.city) newErrors.city = "City/Municipality is required.";
      if (!p.province) newErrors.province = "Province is required.";
      if (!p.zipCode) newErrors.zipCode = "ZIP code is required.";
      if (!p.studentType) newErrors.studentType = "Student type is required.";
      if (!p.pwd) newErrors.pwd = "This field is required.";
    }
    if (step === 2) {
      const ed = formData.education;
      if (!ed.currentSchool) newErrors.currentSchool = "Current school is required.";
      if (!ed.studentNumber) newErrors.studentNumber = "Student number is required.";
      if (!ed.studentEmail) newErrors.studentEmail = "Student email is required.";
      if (!ed.course) newErrors.course = "Course is required.";
      if (!ed.yearLevel) newErrors.yearLevel = "Year level is required.";
      if (!ed.semester) newErrors.semester = "Semester is required.";
      if (!ed.academicYear) newErrors.academicYear = "Academic year is required.";
    }
    if (step === 3) {
      const c = formData.contact;
      if (!c.primaryEmail) newErrors.primaryEmail = "Primary email is required.";
      if (!c.confirmEmail) newErrors.confirmEmail = "Please confirm your email.";
      if (c.primaryEmail && c.confirmEmail && c.primaryEmail !== c.confirmEmail) {
        newErrors.confirmEmail = "Emails do not match.";
      }
      if (!c.mobileNumber) newErrors.mobileNumber = "Mobile number is required.";
      if (!c.guardianName) newErrors.guardianName = "Guardian name is required.";
      if (!c.relationship) newErrors.relationship = "Relationship is required.";
      if (!c.guardianContact) newErrors.guardianContact = "Guardian contact is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSaveAndContinue() {
    if (!validateStep(currentStep)) return;

    if (currentStep === 1) {
      await savePersonalInformation(studentUID, formData.personal);
    } else if (currentStep === 2) {
      await saveEducationalBackground(studentUID, formData.education);
    } else if (currentStep === 3) {
      await saveContactInformation(studentUID, formData.contact);
    }

    setCurrentStep((step) => Math.min(step + 1, STEPS.length));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrevious() {
    setCurrentStep((step) => Math.max(step - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToStep(step) {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSendVerification() {
    await sendVerificationEmail(formData.contact.primaryEmail);
    setVerification({ sent: true, verified: false });
    // TODO: once Firebase Auth is connected, poll / listen for
    // auth.currentUser.emailVerified and flip `verified` to true.
  }

  async function handleSubmit() {
    if (!certified) {
      alert("Please certify that the information provided is true and correct.");
      return;
    }
    const result = await submitOnboarding(studentUID, { ...formData, documents });
    if (result.success) {
      alert("Application submitted successfully!");
    }
  }

  return (
    <div className="onboarding-page">
      <header className="onboarding-header">
        <div className="brand">
          <img src={Logo_Image} 
          alt="ScholarLink Logo"
           className="brand-mark" 
          />
          <div className="brand-text">
            <span className="brand-name">ScholarLink</span>
            <span className="brand-sub">Student Portal</span>
          </div>
        </div>
        <button type="button" className="help-link">
          <FiHelpCircle /> Need help?
        </button>
      </header>

      <div className="onboarding-body">
        <Sidebar currentStep={currentStep} progressPercent={progressPercent} />

        <main className="onboarding-content">
          <div className="content-top">
            <h1>{STEP_TITLES[currentStep].heading}</h1>
            <p className="content-description">{STEP_TITLES[currentStep].description}</p>
          </div>

          <div className="content-columns">
            <div className="content-main">
              {currentStep === 1 && (
                <StepPersonalInformation
                  data={formData.personal}
                  errors={errors}
                  onChange={(field, value) => updateSection("personal", field, value)}
                />
              )}

              {currentStep === 2 && (
                <StepEducationalBackground
                  data={formData.education}
                  errors={errors}
                  onChange={(field, value) => updateSection("education", field, value)}
                  documents={documents}
                  onUploadDocument={uploadDocument}
                  onRemoveDocument={removeDocument}
                />
              )}

              {currentStep === 3 && (
                <StepContactVerification
                  data={formData.contact}
                  errors={errors}
                  onChange={(field, value) => updateSection("contact", field, value)}
                  verification={verification}
                  onSendVerification={handleSendVerification}
                />
              )}

              {currentStep === 4 && (
                <StepReviewSubmit
                  formData={formData}
                  documents={documents}
                  certified={certified}
                  onCertifiedChange={setCertified}
                  goToStep={goToStep}
                />
              )}

              <div className="action-row">
                {currentStep > 1 ? (
                  <button type="button" className="btn btn-secondary" onClick={handlePrevious}>
                    <FiArrowLeft /> Previous
                  </button>
                ) : (
                  <span />
                )}

                {currentStep < STEPS.length ? (
                  <button type="button" className="btn btn-primary" onClick={handleSaveAndContinue}>
                    Save and Continue <FiArrowRight />
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Submit Application <FiArrowRight />
                  </button>
                )}
              </div>
            </div>

            {currentStep === 1 && (
              <aside className="info-panel">
                <span className="info-icon">
                  <FiInfo />
                </span>
                <p className="info-title">Why do we need this?</p>
                <p className="info-text">
                  This information helps us personalize your experience and match you with the
                  right scholarship opportunities.
                </p>
              </aside>
            )}
          </div>
        </main>
      </div>

      <footer className="onboarding-footer">
        <p>© 2025 ScholarLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
