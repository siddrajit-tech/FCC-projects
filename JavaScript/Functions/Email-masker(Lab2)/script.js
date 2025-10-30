const maskEmail = (email) => {
  const atIndex = email.indexOf("@");
  const userName = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const middleUserName = userName.slice(1, userName.length - 1);
  const formatUserName = userName.replace(middleUserName, "*".repeat(middleUserName.length));
  return `${formatUserName}${domain}`
}

const email = "apple.pie@example.com";

console.log(maskEmail(email))