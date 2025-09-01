from locust import HttpUser, task, between

class NotesUser(HttpUser):
    wait_time = between(1, 3)

    def on_start(self):
        self.client.post("/api/auth/register/", json={
            "username": "testuser",
            "email": "test@example.com",
            "password": "TestPass123!"
        })
        r = self.client.post("/api/auth/token/", json={
            "username": "testuser",
            "password": "TestPass123!"
        }).json()
        self.token = r.get("access")

    @task(3)
    def list_notes(self):
        self.client.get("/api/notes/", headers={"Authorization": f"Bearer {self.token}"})

    @task(1)
    def create_note(self):
        self.client.post("/api/notes/", json={
            "note_title": "LoadTest",
            "note_content": "Lorem ipsum"
        }, headers={"Authorization": f"Bearer {self.token}"})
