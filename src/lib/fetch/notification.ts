import { BASE_URL } from "./base-url";

export async function getNotifications({ token }: { token: string }) {
  const res = await fetch(`${BASE_URL}/notifications/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await res.json();

  return json.data;
}

export async function updateUserNotification({
  token,
  notifyId,
}: {
  token: string;
  notifyId: number;
}) {
  const res = await fetch(`${BASE_URL}/userNotifications/update/${notifyId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await res.json();

  return json.data;
}
