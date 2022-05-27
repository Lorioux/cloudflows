import smtpd
import asyncore

class CustomSMTPServer(smtpd.SMTPServer):
    def process_message(self, peer, mail_from, rcpt_tos, data):
        # Process message data...
        if self.handle_error():
            return '500 Could not process your message'

if __name__ == '__main__':
    server = CustomSMTPServer(('127.0.0.1', 10025), None)
    # Run the event loop in the current thread.
    asyncore.loop()