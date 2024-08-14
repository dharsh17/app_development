from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import User, Feedback, Transport
from .serializers import UserSerializer, FeedbackSerializer, TransportSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=True, methods=['post'])
    def update_user(self, request, pk=None):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['delete'])
    def delete_user(self, request, pk=None):
        user = self.get_object()
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    # permission_classes = [IsAuthenticated]  # Require authentication

    @action(detail=True, methods=['post'])
    def update_feedback(self, request, pk=None):
        feedback = self.get_object()
        serializer = self.get_serializer(feedback, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['delete'])
    def delete_feedback(self, request, pk=None):
        feedback = self.get_object()
        feedback.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TransportViewSet(viewsets.ModelViewSet):
    queryset = Transport.objects.all()
    serializer_class = TransportSerializer
    permission_classes = [IsAuthenticated]  # Require authentication

    @action(detail=True, methods=['post'])
    def update_transport(self, request, pk=None):
        transport = self.get_object()
        serializer = self.get_serializer(transport, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['delete'])
    def delete_transport(self, request, pk=None):
        transport = self.get_object()
        transport.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
